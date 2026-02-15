import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  X, 
  Mail, 
  User, 
  CheckCircle, 
  Send,
  Briefcase
} from 'lucide-react';

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

const SERVICE_TYPES = [
  'Business Coaching',
  'Motivational Speaking',
  'Career Counseling',
  'Training & Development',
  'Money Manifestation',
  'General Consultation',
];

export function AppointmentBooking({ isOpen, onClose }: AppointmentBookingProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const generateCalendarLinks = () => {
    if (!formData.date || !formData.time) return null;

    const [time, period] = formData.time.split(' ');
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours);
    
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }

    const startDate = new Date(formData.date + 'T00:00:00');
    startDate.setHours(hour, parseInt(minutes), 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setHours(hour + 1, parseInt(minutes), 0, 0);

    const formatGoogleDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
    };

    const title = `Coaching Session with Dinesh Shinde - ${formData.serviceType}`;
    const description = `Session Type: ${formData.serviceType}\n\nClient: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message || 'N/A'}\n\nLocation: Virtual Meeting (Link will be shared via email)`;
    const location = 'Virtual Meeting';

    // Google Calendar
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

    // Outlook Calendar
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;

    // iCal file content
    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatGoogleDate(startDate)}
DTEND:${formatGoogleDate(endDate)}
SUMMARY:${title}
DESCRIPTION:${description.replace(/\n/g, '\\n')}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

    return { googleUrl, outlookUrl, icalContent };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate email content
      const emailSubject = `Appointment Booking Request - ${formData.name}`;
      const emailBody = `
New Appointment Booking Request

Client Details:
━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}

Appointment Details:
━━━━━━━━━━━━━━━━━━━━
Service Type: ${formData.serviceType}
Date: ${formatDate(formData.date)}
Time: ${formData.time}

Client Message:
━━━━━━━━━━━━━━━━━━━━
${formData.message || 'No additional message'}

━━━━━━━━━━━━━━━━━━━━
This booking was submitted from www.dineshinde.com
      `.trim();

      // Open email client with the booking details
      const mailtoLink = `mailto:dineshinde23@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      // Show success state
      setStep('success');
    } catch (err) {
      setErrors({ ...errors, submit: 'Failed to send booking request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({ name: '', email: '', serviceType: '', date: '', time: '', message: '' });
    setErrors({});
    setIsSubmitting(false);
    onClose();
  };

  const downloadICalFile = () => {
    const links = generateCalendarLinks();
    if (!links) return;

    const blob = new Blob([links.icalContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'appointment.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'form' ? (
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4"
                  >
                    <CalendarIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Book Your Session</h2>
                  <p className="text-sm text-gray-400">Schedule a consultation with Dinesh Shinde</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                        placeholder="Your name"
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-white mb-2">
                      Service Type *
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-800 border ${errors.serviceType ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer`}
                      >
                        <option value="">Select a service</option>
                        {SERVICE_TYPES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.serviceType && <p className="text-red-400 text-sm mt-1">{errors.serviceType}</p>}
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date Field */}
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-white mb-2">
                        Date *
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-800 border ${errors.date ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all cursor-pointer`}
                        />
                      </div>
                      {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
                    </div>

                    {/* Time Field */}
                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-white mb-2">
                        Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-3 bg-gray-800 border ${errors.time ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer`}
                        >
                          <option value="">Select time</option>
                          {TIME_SLOTS.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  {/* Summary */}
                  {formData.date && formData.time && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4"
                    >
                      <h4 className="text-sm font-bold text-white mb-2">Booking Summary</h4>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between text-gray-300">
                          <span>Date:</span>
                          <span className="font-semibold text-white">{formatDate(formData.date)}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Time:</span>
                          <span className="font-semibold text-white">{formData.time}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                          <span>Duration:</span>
                          <span className="font-semibold text-white">60 minutes</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {errors.submit && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                      <p className="text-red-400 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                  <p className="text-xs text-gray-400 mb-3">Or email directly</p>
                  <a
                    href="mailto:dineshinde23@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded-xl text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    dineshinde23@gmail.com
                  </a>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3">Booking Request Sent!</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Your appointment request has been submitted to <span className="font-semibold text-white">dineshinde23@gmail.com</span>. We'll confirm within 24 hours.
                </p>

                {/* Booking Details */}
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6 max-w-md mx-auto">
                  <h4 className="text-lg font-bold text-white mb-4">Appointment Details</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Service:</span>
                      <span className="text-white font-semibold">{formData.serviceType}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white font-semibold">
                        {formatDate(formData.date)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white font-semibold">{formData.time}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white font-semibold">{formData.email}</span>
                    </div>
                  </div>
                </div>

                {/* Add to Calendar */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-400">Add to your calendar:</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={generateCalendarLinks()?.googleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all text-sm"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      Google
                    </a>
                    <a
                      href={generateCalendarLinks()?.outlookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-xl font-semibold transition-all text-sm"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      Outlook
                    </a>
                    <button
                      onClick={downloadICalFile}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-xl font-semibold transition-all text-sm"
                    >
                      <CalendarIcon className="w-4 h-4" />
                      iCal
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}