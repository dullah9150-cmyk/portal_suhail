import { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const { TextArea } = Input;

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'suhaillad2354@gmail.com',
    href: 'mailto:suhaillad2354@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 7448958345',
    href: 'tel:+91 7448958345',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Melapalayam.Tirunelveli',
    href: null,
  },
];

const socials = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/alexmorgan' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/alexmorgan' },
  { icon: <FiTwitter />, label: 'Twitter', href: 'https://twitter.com/alexmorgan' },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  useScrollReveal();

  const handleSubmit = async (values) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    message.success('Message sent! I\'ll get back to you soon. 🚀');
    form.resetFields();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left info */}
          <div className="contact-info reveal-left">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              I'm open to freelance opportunities, full-time positions, or just a friendly chat about tech and design.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="contact-item-value">{item.value}</a>
                      : <span className="contact-item-value">{item.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <div className="contact-socials-label">Find me on</div>
              <div className="contact-socials-row">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="contact-form-wrap reveal-right">
            <Form form={form} layout="vertical" onFinish={handleSubmit} className="contact-form">
              <div className="form-row">
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Md Suhail" />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input placeholder="hello@example.com" />
                </Form.Item>
              </div>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input placeholder="Project collaboration, Freelance work..." />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="submit-btn"
                icon={<FiSend />}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
