import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useContent } from '@/contexts/ContentContext';
import { SEO } from '@/components/SEO';
import { LogOut, Briefcase, MessageSquare, Users, Plus, Edit2, Trash2, Save, X, ExternalLink, Loader2, Upload } from 'lucide-react';
import { PortfolioProject } from '@/data/portfolioData';
import { supabase } from '@/lib/supabaseClient';
import { uploadImage } from '@/lib/storage';

type TabType = 'portfolio' | 'testimonials' | 'companies';

export const AdminDashboardPage = () => {
  const { isAuthenticated, logout } = useAuth();
  const { content, loading, updatePortfolioProjects, updateTestimonials, updateTrustedCompanies } = useContent();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('portfolio');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-12 w-12 text-teal-500 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Admin Dashboard"
        description="Admin Dashboard für Joos Soft Solutions"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-950">Admin Dashboard</h1>
              <p className="text-gray-600 text-sm">Joos Soft Solutions</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Abmelden
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === 'portfolio'
                    ? 'border-teal-500 text-teal-500 font-bold'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Briefcase className="h-5 w-5" />
                Portfolio Projekte
              </button>
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === 'testimonials'
                    ? 'border-teal-500 text-teal-500 font-bold'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <MessageSquare className="h-5 w-5" />
                Testimonials
              </button>
              <button
                onClick={() => setActiveTab('companies')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === 'companies'
                    ? 'border-teal-500 text-teal-500 font-bold'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="h-5 w-5" />
                Vertrauende Unternehmen
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {activeTab === 'portfolio' && (
            <PortfolioManager
              projects={content.portfolioProjects}
              onUpdate={updatePortfolioProjects}
              editingId={editingId}
              setEditingId={setEditingId}
              showAddForm={showAddForm}
              setShowAddForm={setShowAddForm}
            />
          )}
          {activeTab === 'testimonials' && (
            <TestimonialsManager
              testimonials={content.testimonials}
              onUpdate={updateTestimonials}
              editingId={editingId}
              setEditingId={setEditingId}
              showAddForm={showAddForm}
              setShowAddForm={setShowAddForm}
            />
          )}
          {activeTab === 'companies' && (
            <CompaniesManager
              companies={content.trustedCompanies}
              onUpdate={updateTrustedCompanies}
              editingId={editingId}
              setEditingId={setEditingId}
              showAddForm={showAddForm}
              setShowAddForm={setShowAddForm}
            />
          )}
        </div>
      </div>
    </>
  );
};

// Portfolio Manager Component
const PortfolioManager = ({ projects, onUpdate, editingId, setEditingId, showAddForm, setShowAddForm }: any) => {
  const [formData, setFormData] = useState<Partial<PortfolioProject>>({});
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const url = await uploadImage(file, 'portfolio');
      setFormData({ ...formData, imageUrl: url });
    } catch (error: any) {
      alert('Upload fehlgeschlagen: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleAdd = () => {
    setFormData({
      id: Date.now().toString(),
      title: '',
      shortDescription: '',
      fullDescription: '',
      imageUrl: '',
      category: '',
      technologies: [],
      features: [],
      challenge: '',
      solution: '',
      results: [],
      projectUrl: ''
    });
    setShowAddForm(true);
    setEditingId(null);
  };

  const handleEdit = (project: PortfolioProject) => {
    setFormData(project);
    setEditingId(project.id);
    setShowAddForm(false);
  };

  const handleSave = async () => {
    try {
      // Map camelCase to snake_case for DB
      const dbData = {
        id: formData.id,
        title: formData.title,
        short_description: formData.shortDescription,
        full_description: formData.fullDescription,
        image_url: formData.imageUrl,
        category: formData.category,
        technologies: formData.technologies,
        features: formData.features,
        challenge: formData.challenge,
        solution: formData.solution,
        results: formData.results,
        project_url: formData.projectUrl
      };

      if (showAddForm) {
        const { error } = await supabase.from('portfolio_projects').insert([dbData]);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('portfolio_projects').update(dbData).eq('id', editingId);
        if (error) throw error;
      }
      onUpdate([]); // Trigger refresh in context
      setEditingId(null);
      setShowAddForm(false);
      setFormData({});
    } catch (error: any) {
      alert('Fehler beim Speichern: ' + error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Möchten Sie dieses Projekt wirklich löschen?')) {
      try {
        const { error } = await supabase.from('portfolio_projects').delete().eq('id', id);
        if (error) throw error;
        onUpdate([]); // Trigger refresh in context
      } catch (error: any) {
        alert('Fehler beim Löschen: ' + error.message);
      }
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowAddForm(false);
    setFormData({});
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-950">Portfolio Projekte</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Neues Projekt
        </button>
      </div>

      {(showAddForm || editingId) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h3 className="text-xl font-bold text-blue-950 mb-4">
            {showAddForm ? 'Neues Projekt hinzufügen' : 'Projekt bearbeiten'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Titel *</label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Kategorie *</label>
              <input
                type="text"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Kurzbeschreibung *</label>
              <textarea
                value={formData.shortDescription || ''}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                rows={2}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Vollständige Beschreibung *</label>
              <textarea
                value={formData.fullDescription || ''}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Bild *</label>
              <div className="flex flex-col gap-2">
                {formData.imageUrl && (
                  <img 
                    src={formData.imageUrl} 
                    alt="Preview" 
                    className="h-32 w-full object-cover rounded-lg border border-gray-200" 
                  />
                )}
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="portfolio-image"
                  />
                  <label
                    htmlFor="portfolio-image"
                    className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-300 px-4 py-3 rounded-lg hover:border-teal-500 hover:text-teal-500 cursor-pointer transition-all"
                  >
                    {uploading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Upload className="h-5 w-5" />
                    )}
                    {formData.imageUrl ? 'Bild ändern' : 'Bild hochladen'}
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.imageUrl || ''}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="Oder Bild URL eingeben"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Projekt URL / Website Link</label>
              <input
                type="text"
                value={formData.projectUrl || ''}
                onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
                placeholder="https://beispiel-projekt.de"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Technologien (kommagetrennt) *</label>
              <input
                type="text"
                value={formData.technologies?.join(', ') || ''}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(',').map(t => t.trim()) })}
                placeholder="React, TypeScript, Node.js"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Features (eine pro Zeile) *</label>
              <textarea
                value={formData.features?.join('\n') || ''}
                onChange={(e) => setFormData({ ...formData, features: e.target.value.split('\n').filter(f => f.trim()) })}
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Herausforderung *</label>
              <textarea
                value={formData.challenge || ''}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Lösung *</label>
              <textarea
                value={formData.solution || ''}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Ergebnisse (eine pro Zeile) *</label>
              <textarea
                value={formData.results?.join('\n') || ''}
                onChange={(e) => setFormData({ ...formData, results: e.target.value.split('\n').filter(r => r.trim()) })}
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              <Save className="h-5 w-5" />
              Speichern
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
              Abbrechen
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project: PortfolioProject) => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-blue-950">{project.title}</h3>
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 transition-colors"
                      title="Projekt-Website öffnen"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-2">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Testimonials Manager Component
const TestimonialsManager = ({ testimonials, onUpdate, editingId, setEditingId, showAddForm, setShowAddForm }: any) => {
  const [formData, setFormData] = useState<any>({});

  const handleAdd = () => {
    setFormData({ quote: '', author: '', project: '' });
    setShowAddForm(true);
    setEditingId(null);
  };

  const handleEdit = (testimonial: any) => {
    setFormData(testimonial);
    setEditingId(testimonial.id);
    setShowAddForm(false);
  };

  const handleSave = async () => {
    try {
      // Map camelCase to snake_case for DB (if applicable)
      // Note: Testimonials fields are already quote, author, project in DB
      
      const dbData = {
        quote: formData.quote,
        author: formData.author,
        project: formData.project
      };

      if (showAddForm) {
        const { error } = await supabase.from('testimonials').insert([dbData]);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('testimonials').update(dbData).eq('id', editingId);
        if (error) throw error;
      }
      onUpdate([]);
      setEditingId(null);
      setShowAddForm(false);
      setFormData({});
    } catch (error: any) {
      alert('Fehler beim Speichern: ' + error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Möchten Sie dieses Testimonial wirklich löschen?')) {
      try {
        const { error } = await supabase.from('testimonials').delete().eq('id', id);
        if (error) throw error;
        onUpdate([]);
      } catch (error: any) {
        alert('Fehler beim Löschen: ' + error.message);
      }
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowAddForm(false);
    setFormData({});
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-950">Testimonials</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Neues Testimonial
        </button>
      </div>

      {(showAddForm || editingId !== null) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h3 className="text-xl font-bold text-blue-950 mb-4">
            {showAddForm ? 'Neues Testimonial hinzufügen' : 'Testimonial bearbeiten'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Zitat *</label>
              <textarea
                value={formData.quote || ''}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Autor *</label>
              <input
                type="text"
                value={formData.author || ''}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Projekt (optional)</label>
              <input
                type="text"
                value={formData.project || ''}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              <Save className="h-5 w-5" />
              Speichern
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
              Abbrechen
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {testimonials.map((testimonial: any) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <p className="text-gray-700 italic mb-3">"{testimonial.quote}"</p>
                <p className="text-blue-950 font-bold">— {testimonial.author}</p>
                {testimonial.project && (
                  <p className="text-gray-500 text-sm">{testimonial.project}</p>
                )}
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(testimonial)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Companies Manager Component
const CompaniesManager = ({ companies, onUpdate, editingId, setEditingId, showAddForm, setShowAddForm }: any) => {
  const [formData, setFormData] = useState<any>({});
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const url = await uploadImage(file, 'companies');
      setFormData({ ...formData, logoUrl: url });
    } catch (error: any) {
      alert('Upload fehlgeschlagen: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleAdd = () => {
    setFormData({ name: '', logoUrl: '', websiteUrl: '' });
    setShowAddForm(true);
    setEditingId(null);
  };

  const handleEdit = (company: any) => {
    setFormData(company);
    setEditingId(company.id);
    setShowAddForm(false);
  };

  const handleSave = async () => {
    try {
      // Map camelCase to snake_case for DB
      const dbData = {
        name: formData.name,
        logo_url: formData.logoUrl,
        website_url: formData.websiteUrl
      };

      if (showAddForm) {
        const { error } = await supabase.from('trusted_companies').insert([dbData]);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('trusted_companies').update(dbData).eq('id', editingId);
        if (error) throw error;
      }
      onUpdate([]);
      setEditingId(null);
      setShowAddForm(false);
      setFormData({});
    } catch (error: any) {
      alert('Fehler beim Speichern: ' + error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Möchten Sie dieses Unternehmen wirklich löschen?')) {
      try {
        const { error } = await supabase.from('trusted_companies').delete().eq('id', id);
        if (error) throw error;
        onUpdate([]);
      } catch (error: any) {
        alert('Fehler beim Löschen: ' + error.message);
      }
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowAddForm(false);
    setFormData({});
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-950">Vertrauende Unternehmen</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Neues Unternehmen
        </button>
      </div>

      {(showAddForm || editingId !== null) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h3 className="text-xl font-bold text-blue-950 mb-4">
            {showAddForm ? 'Neues Unternehmen hinzufügen' : 'Unternehmen bearbeiten'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Name *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Logo *</label>
              <div className="flex flex-col gap-2">
                {formData.logoUrl && (
                  <div className="h-20 flex items-center justify-center p-2 bg-gray-50 rounded-lg border border-gray-200">
                    <img 
                      src={formData.logoUrl} 
                      alt="Preview" 
                      className="h-full w-auto object-contain" 
                    />
                  </div>
                )}
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="company-logo"
                  />
                  <label
                    htmlFor="company-logo"
                    className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-gray-300 px-4 py-3 rounded-lg hover:border-teal-500 hover:text-teal-500 cursor-pointer transition-all"
                  >
                    {uploading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Upload className="h-5 w-5" />
                    )}
                    {formData.logoUrl ? 'Logo ändern' : 'Logo hochladen'}
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.logoUrl || ''}
                  onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
                  placeholder="Oder Logo URL eingeben"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Website URL *</label>
              <input
                type="text"
                value={formData.websiteUrl || ''}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            >
              <Save className="h-5 w-5" />
              Speichern
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
              Abbrechen
            </button>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company: any) => (
          <div key={company.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={company.logoUrl}
                alt={company.name}
                className="h-16 w-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-bold text-blue-950 mb-2">{company.name}</h3>
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 text-sm hover:underline mb-4"
              >
                {company.websiteUrl}
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(company)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(company.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
