import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // EmailJS Integration - Replace with your actual EmailJS credentials
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'kontakt@joos-soft-solutions.de'
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="text-gray-700 font-bold block mb-2">
          Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg border-solid focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          placeholder="Ihr vollständiger Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-700 font-bold block mb-2">
          E-Mail *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-3 rounded-lg border-solid focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          placeholder="ihre.email@beispiel.de"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-gray-700 font-bold block mb-2">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-y w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
        ></textarea>
      </div>
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {errorMessage}
        </div>
      )}
      
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </div>
      )}
      
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white font-bold bg-blue-950 w-full px-8 py-3 rounded-full hover:bg-blue-900 transition-colors active:scale-95 transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wird gesendet...' : submitStatus === 'success' ? 'Gesendet! ✓' : 'Nachricht senden'}
        </button>
      </div>
      
      <p className="text-sm text-gray-500 text-center">
        * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
      </p>
    </form>
  );
};
