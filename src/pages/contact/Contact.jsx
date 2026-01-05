import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from 'emailjs-com'

const Contact = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-slate-100 scrollbar-hide">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have a project idea, collaboration, or just want to say hi? Feel
            free to reach out — I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "ayushbharne@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 XXXXX XXXXX",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Balaghat, India",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="
                  flex items-start gap-4
                  p-6 rounded-xl
                  bg-neutral-900 border border-neutral-800
                  hover:border-amber-400
                  transition
                "
              >
                <div className="p-3 rounded-lg bg-neutral-800 text-amber-400">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-base text-white mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Send a Message
            </h2>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();

                emailjs
                  .send(
                    import.meta.env.VITE_EMAIL_SERVICE_ID,
                    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                    {
                      name: e.target.name.value,
                      email: e.target.email.value,
                      message: e.target.message.value,
                      
                    },
                    import.meta.env.VITE_EMAIL_PUBLIC_KEY
                  )
                  .then(() => {
                    alert("✅ Message sent successfully!");
                    e.target.reset();
                  })
                  .catch((err) => {
                    console.error(err);
                    alert("❌ Failed to send message");
                  });
              }}
            >
              {/* Name */}
              <div>
                <label className="text-sm text-neutral-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="
          mt-2 w-full rounded-lg
          bg-neutral-800 border border-neutral-700
          px-4 py-3 text-sm
          text-slate-100
          placeholder-neutral-500
          focus:outline-none focus:border-amber-400
        "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-neutral-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="
          mt-2 w-full rounded-lg
          bg-neutral-800 border border-neutral-700
          px-4 py-3 text-sm
          text-slate-100
          placeholder-neutral-500
          focus:outline-none focus:border-amber-400
        "
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-neutral-400">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="
          mt-2 w-full rounded-lg
          bg-neutral-800 border border-neutral-700
          px-4 py-3 text-sm
          text-slate-100
          placeholder-neutral-500
          resize-none
          focus:outline-none focus:border-amber-400
        "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
        w-full flex items-center justify-center gap-2
        py-3 rounded-lg
        bg-amber-400 text-neutral-900
        font-semibold
        transition-all
        hover:bg-amber-300 hover:-translate-y-0.5
      "
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
