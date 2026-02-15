# Appointment Booking System

## 🎉 Open Source Solution

This is a **100% free and open-source** appointment booking system that doesn't require any external API setup or paid services!

## ✨ Features

### 1. **Custom Calendar Interface**
- Interactive month-by-month calendar
- Date selection with availability checking
- Excludes Sundays automatically
- Blocks past dates

### 2. **Time Slot Selection**
- Pre-configured business hours (9 AM - 5 PM)
- Visual time slot picker
- Easy to customize time ranges

### 3. **Form Fields**
- ✅ Full Name
- ✅ Email Address (NO phone number!)
- ✅ Service Type Selection
- ✅ Additional Message (Optional)

### 4. **Email Integration**
- Automatically opens email client with booking details
- Sends to: dineshinde23@gmail.com
- Professional formatted email template

### 5. **Calendar Export**
- **Google Calendar** - Direct link to add event
- **Outlook Calendar** - Direct link to add event
- **iCal File Download** - Works with Apple Calendar, Outlook Desktop, and any calendar app

### 6. **No Backend Required**
- Pure frontend solution
- No database needed
- No API keys required
- No monthly fees
- No external dependencies

## 🚀 How It Works

1. **User selects a date** from the interactive calendar
2. **User selects a time slot** from available times
3. **User fills in their information** (name, email, service type)
4. **Form submits** → Opens email client with pre-filled booking details
5. **Success page shows** with options to:
   - Add to Google Calendar
   - Add to Outlook Calendar
   - Download iCal file for other calendar apps

## 📧 Email Flow

When a user books an appointment:

1. **Email client opens** with a formatted message containing:
   - Client name and email
   - Selected service type
   - Appointment date and time
   - Additional message (if provided)

2. **You receive the booking request** at dineshinde23@gmail.com

3. **You manually confirm** the appointment by replying to the client

4. **Client can add to their calendar** using the provided links/file

## 🎨 Customization

### Change Available Times

Edit the `TIME_SLOTS` array in `/src/app/components/AppointmentBooking.tsx`:

```typescript
const TIME_SLOTS: TimeSlot[] = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  // Add more slots as needed
];
```

### Change Service Types

Edit the `SERVICE_TYPES` array:

```typescript
const SERVICE_TYPES = [
  'Business Coaching',
  'Motivational Speaking',
  // Add your services
];
```

### Change Email Recipient

Find `dineshinde23@gmail.com` in the code and replace with your email.

### Change Available Days

Edit the `isDateAvailable` function to customize which days are bookable:

```typescript
const isDateAvailable = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = date.getDay();
  // Available Monday-Saturday (1-6), not on Sundays (0)
  return date >= today && day !== 0;
};
```

## 🔧 Technical Stack

- **React** - UI framework
- **Motion (Framer Motion)** - Smooth animations
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Beautiful icons
- **Zustand** - State management

## 📱 Fully Responsive

Works perfectly on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large displays

## ♿ Accessible

- Keyboard navigation support
- Screen reader friendly
- ARIA labels
- Focus management

## 🎯 Best Practices

1. **Form validation** - All required fields validated
2. **Error handling** - Clear error messages
3. **Loading states** - Visual feedback
4. **Success confirmation** - Clear success state
5. **Calendar integration** - Multiple options for users

## 📦 No Dependencies on External Services

Unlike other booking solutions that require:
- ❌ Google Calendar API setup
- ❌ Calendly subscription
- ❌ Payment processing
- ❌ Database hosting
- ❌ Server infrastructure

This solution requires:
- ✅ Email client (built into every computer/phone)
- ✅ Web browser
- ✅ That's it!

## 🔒 Privacy & Security

- No data is stored on servers
- No tracking or analytics
- No third-party services
- Direct email communication only
- GDPR compliant (no data retention)

## 💰 Cost

**$0 forever!**

No hidden fees, no subscriptions, no API limits.

## 📄 License

Open source and free to use, modify, and distribute.

## 🎉 Perfect For

- Freelancers
- Coaches
- Consultants
- Service providers
- Small businesses
- Anyone who needs appointment booking!

---

**Built with ❤️ for Dinesh Shinde's coaching business**
