import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form className="box-border caret-transparent" onSubmit={handleSubmit}>
      <div className="box-border caret-transparent">
        <label className="text-gray-700 font-bold box-border caret-transparent block mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="box-border caret-transparent w-full border border-gray-300 px-4 py-3 rounded-lg border-solid focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
        />
      </div>
      <div className="box-border caret-transparent mt-6">
        <label className="text-gray-700 font-bold box-border caret-transparent block mb-2">
          E-Mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="box-border caret-transparent w-full border border-gray-300 px-4 py-3 rounded-lg border-solid focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
        />
      </div>
      <div className="box-border caret-transparent mt-6">
        <label className="text-gray-700 font-bold box-border caret-transparent block mb-2">
          Nachricht
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="box-border caret-transparent resize-y w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
        ></textarea>
      </div>
      <div className="box-border caret-transparent text-center mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white font-bold bg-blue-950 caret-transparent w-full px-8 py-3 rounded-full hover:bg-blue-900 transition-colors active:scale-95 transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Wird gesendet...' : submitStatus === 'success' ? 'Gesendet! ✓' : 'Nachricht senden'}
        </button>
      </div>
    </form>
  );
};
