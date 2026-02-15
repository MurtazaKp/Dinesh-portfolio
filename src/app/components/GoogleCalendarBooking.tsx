import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  X, 
  Mail, 
  User, 
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageSquare,
  Briefcase,
  AlertCircle,
  ExternalLink,
  Video,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface GoogleCalendarBookingProps {
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
  'Business Opportunity',
  'Business Coaching',
  'Motivational Speaking',
  'Training & Development',
  'Career Counseling',
  'Money Manifestation',
];

const SESSION_TYPES = [
  { id: 'ldp1', name: 'LDP 1', description: 'Leadership Development Program - Level 1' },
  { id: 'ldp2', name: 'LDP 2', description: 'Leadership Development Program - Level 2' },
  { id: 'ds1', name: 'DS 1', description: 'Development Session - Level 1' },
  { id: 'ds2', name: 'DS 2', description: 'Development Session - Level 2' },
];

export function GoogleCalendarBooking({ isOpen, onClose }: GoogleCalendarBookingProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    sessionType: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5);
    }
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

  const handleGoogleCalendarBooking = () => {
    setIsRedirecting(true);

    // Build the Google Calendar event details
    const eventTitle = `Session with Dinesh Shinde - ${formData.serviceType}`;
    const eventDetails = `
Service Type: ${formData.serviceType}${formData.sessionType ? `\nSession Type: ${formData.sessionType}` : ''}

Client Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Meeting Details:
${formData.message || 'No additional notes'}

---
Scheduled via: www.dineshinde.com
    `.trim();

    // Parse date and time
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
      return date.toISOString().replace(/-|:|\\.\\d\\d\\d/g, '');
    };

    // Google Calendar URL with all details
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent('Virtual Meeting via Google Meet')}&add=${encodeURIComponent('dineshinde23@gmail.com')}&add=${encodeURIComponent(formData.email)}`;

    // Redirect to Google Calendar and show confirmation
    setTimeout(() => {
      window.open(googleCalendarUrl, '_blank');
      setIsRedirecting(false);
      setStep(5); // Show confirmation screen
    }, 1500);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ name: '', email: '', phone: '', serviceType: '', sessionType: '', date: '', time: '', message: '' });
    setErrors({});
    setIsRedirecting(false);
    onClose();
  };

  const today = new Date().toISOString().split('T')[0];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-6">
      {[1, 2, 3, 4].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step >= s
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gray-800 text-gray-500'
            }`}
          >
            {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
          </div>
          {s < 4 && (
            <div
              className={`w-8 h-[2px] transition-all ${
                step > s ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-800'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
            className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-3"
                >
                  <CalendarIcon className="w-7 h-7 text-white" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl font-black text-white mb-1">Book Your Session</h2>
                <p className="text-xs text-gray-400">Schedule a consultation with Dinesh Shinde</p>
              </div>

              {/* Step Indicator */}
              {renderStepIndicator()}

              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">Personal Information</h3>
                    <p className="text-xs text-gray-400">Tell us about yourself</p>
                  </div>

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
                        placeholder="Enter your full name"
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

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleNext}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Service Selection */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">Choose Service</h3>
                    <p className="text-xs text-gray-400">What would you like to discuss?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICE_TYPES.map((service) => (
                      <motion.button
                        key={service}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setFormData({ ...formData, serviceType: service });
                          setErrors({ ...errors, serviceType: '' });
                        }}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          formData.serviceType === service
                            ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500'
                            : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            formData.serviceType === service
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                              : 'bg-gray-700'
                          }`}>
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1 text-sm">{service}</h4>
                            <p className="text-xs text-gray-400">1 hour session</p>
                          </div>
                          {formData.serviceType === service && (
                            <CheckCircle2 className="w-5 h-5 text-purple-400 ml-auto" />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {errors.serviceType && (
                    <p className="text-red-400 text-sm text-center">{errors.serviceType}</p>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={handleBack}
                      className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Date & Time Selection */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">Select Date & Time</h3>
                    <p className="text-xs text-gray-400">Choose your preferred slot</p>
                  </div>

                  {/* Date Field */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-white mb-2">
                      Select Date *
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

                  {/* Session Type Field */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Session Type (Optional)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SESSION_TYPES.map((session) => (
                        <motion.button
                          key={session.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setFormData({ ...formData, sessionType: session.name });
                          }}
                          className={`p-3 rounded-xl border-2 transition-all text-center ${
                            formData.sessionType === session.name
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-500 text-white'
                              : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
                          }`}
                          title={session.description}
                        >
                          <div className="font-semibold text-sm">{session.name}</div>
                          <div className="text-[10px] text-gray-400 mt-0.5">{session.description.split(' - ')[1]}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      Select Time *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((slot) => (
                        <motion.button
                          key={slot}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setFormData({ ...formData, time: slot });
                            setErrors({ ...errors, time: '' });
                          }}
                          className={`p-3 rounded-xl border-2 transition-all font-semibold text-sm ${
                            formData.time === slot
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-500 text-white'
                              : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          {slot}
                        </motion.button>
                      ))}
                    </div>
                    {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Meeting Details / Notes (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                        placeholder="What would you like to discuss?"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleBack}
                      className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Review Booking
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation & Google Calendar Redirect */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">Review Your Appointment</h3>
                    <p className="text-sm text-gray-400">Confirm your booking details</p>
                  </div>

                  {/* Booking Summary - Side by Side Layout */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-850 border border-gray-700 rounded-xl p-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Client Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white">Client</h4>
                        </div>
                        <p className="text-base font-semibold text-white truncate">{formData.name}</p>
                        <p className="text-sm text-gray-300 truncate">{formData.email}</p>
                        <p className="text-sm text-gray-300">{formData.phone}</p>
                      </div>

                      {/* Service Info */}
                      <div className="space-y-2 md:border-l md:border-gray-700 md:pl-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white">Service</h4>
                        </div>
                        <p className="text-base font-semibold text-white">{formData.serviceType}</p>
                        <p className="text-sm text-gray-300">60 min session</p>
                      </div>

                      {/* Date & Time Info */}
                      <div className="space-y-2 md:border-l md:border-gray-700 md:pl-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <CalendarIcon className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white">Date & Time</h4>
                        </div>
                        <p className="text-base font-semibold text-white">{formatDate(formData.date)}</p>
                        <p className="text-sm text-gray-300">{formData.time} IST</p>
                      </div>
                    </div>

                    {/* Notes Section - Full Width Below */}
                    {formData.message && (
                      <>
                        <div className="border-t border-gray-700 my-5"></div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                              <MessageSquare className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-sm font-bold text-white">Meeting Notes</h4>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{formData.message}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Google Calendar Info */}
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-200">
                      You'll be redirected to Google Calendar where the event will be added with automatic email confirmations and a Google Meet link.
                    </p>
                  </div>

                  {/* Action Buttons - Side by Side */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleBack}
                      disabled={isRedirecting}
                      className="w-full sm:flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 py-4 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleGoogleCalendarBooking}
                      disabled={isRedirecting}
                      className="w-full sm:flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isRedirecting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Redirecting...
                        </>
                      ) : (
                        <>
                          Book with Google Calendar
                          <ExternalLink className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Alternative Contact */}
                  <div className="text-center pt-4 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-2">Prefer to book manually?</p>
                    <a
                      href="mailto:dineshinde23@gmail.com"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      dineshinde23@gmail.com
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmation Screen */}
              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  {/* Success Animation */}
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.6 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-white mb-2">Booking Confirmed!</h3>
                    <p className="text-sm text-gray-300">Your session has been successfully scheduled</p>
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-850 border border-gray-700 rounded-xl p-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Client Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white">Client</h4>
                        </div>
                        <p className="text-base font-semibold text-white break-words">{formData.name}</p>
                        <p className="text-sm text-gray-300 break-words">{formData.email}</p>
                        <p className="text-sm text-gray-300">{formData.phone}</p>
                      </div>

                      {/* Service Info */}
                      <div className="space-y-2 md:border-l md:border-gray-700 md:pl-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white">Service</h4>
                        </div>
                        <p className="text-base font-semibold text-white">{formData.serviceType}</p>
                        <p className="text-sm text-gray-300">60 min session</p>
                        {formData.sessionType && (
                          <p className="text-sm text-purple-400 font-medium">{formData.sessionType}</p>
                        )}
                      </div>

                      {/* Date & Time Info */}
                      <div className="space-y-2 md:border-l md:border-gray-700 md:pl-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <CalendarIcon className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-white">Date & Time</h4>
                        </div>
                        <p className="text-base font-semibold text-white">{formatDate(formData.date)}</p>
                        <p className="text-sm text-gray-300">{formData.time} IST</p>
                      </div>
                    </div>

                    {/* Notes Section - Full Width Below */}
                    {formData.message && (
                      <>
                        <div className="border-t border-gray-700 my-5"></div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                              <MessageSquare className="w-4 h-4 text-white" />
                            </div>
                            <h4 className="text-sm font-bold text-white">Meeting Notes</h4>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{formData.message}</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* What Happens Next */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-base font-bold text-white mb-2">What Happens Next?</h4>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                            <p>
                              <span className="font-semibold text-green-400">Google Calendar:</span> Event has been added to your calendar with all booking details
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                            <p>
                              <span className="font-semibold text-green-400">Google Meet:</span> Video conference link will be automatically generated and shared
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                            <p>
                              <span className="font-semibold text-green-400">Email Confirmation:</span> Both you and Dinesh Shinde will receive email confirmations
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                            <p>
                              <span className="font-semibold text-green-400">Meeting Reminders:</span> Google Calendar will send reminders before your session
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Notification Button */}
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Video className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <h4 className="text-sm font-semibold text-white">Need to Send Additional Details?</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-3">
                      Click below to compose an email with all booking details to send to Dinesh Shinde
                    </p>
                    <a
                      href={`mailto:dineshinde23@gmail.com?subject=${encodeURIComponent(`Session Booking: ${formData.serviceType} - ${formatDate(formData.date)}`)}&body=${encodeURIComponent(`Hi Dinesh,\n\nI have successfully booked a session with you through www.dineshinde.com.\n\nBooking Details:\n-------------------\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nService Type: ${formData.serviceType}${formData.sessionType ? `\nSession Type: ${formData.sessionType}` : ''}\n\nDate: ${formatDate(formData.date)}\nTime: ${formData.time} IST\nDuration: 60 minutes\n\nMeeting Platform: Google Meet (link will be shared via calendar invitation)\n\n${formData.message ? `Additional Notes:\n${formData.message}\n\n` : ''}Looking forward to our session!\n\nBest regards,\n${formData.name}`)}`}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Send Booking Details via Email
                    </a>
                  </div>

                  {/* Close Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleClose}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Done
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Contact Support */}
                  <div className="text-center pt-4 border-t border-gray-800">
                    <p className="text-xs text-gray-500 mb-2">Need help or want to reschedule?</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <a
                        href="mailto:dineshinde23@gmail.com"
                        className="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        <Mail className="w-3 h-3" />
                        dineshinde23@gmail.com
                      </a>
                      <a
                        href="tel:+917719871047"
                        className="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium"
                      >
                        <Phone className="w-3 h-3" />
                        +91 77198 71047
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}