"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};
function App() {
    var scrollYProgress = (0, framer_motion_1.useScroll)().scrollYProgress;
    var scaleX = (0, framer_motion_1.useSpring)(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    var scrollToSection = function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <framer_motion_1.motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" style={{ scaleX: scaleX }}/>
      {/* Hero Section */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.png" alt="Smart Bill Book Logo" className="h-8 w-8"/>
              <span className="ml-2 text-xl font-bold text-gray-900">Smart Bill Book</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={function () { return scrollToSection('features'); }} className="text-gray-600 hover:text-primary transition-colors">
                Features
              </button>
              <button onClick={function () { return scrollToSection('pricing'); }} className="text-gray-600 hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={function () { return scrollToSection('testimonials'); }} className="text-gray-600 hover:text-primary transition-colors">
                Testimonials
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center space-x-2 bg-[#0078D4] text-white px-4 py-2 rounded-lg hover:bg-[#006cbd] transition-colors text-sm">
                <lucide_react_1.Download className="h-4 w-4"/>
                <span>Windows</span>
              </a>
              <a href="#" className="flex items-center space-x-2 bg-[#414141] text-white px-4 py-2 rounded-lg hover:bg-[#2d2d2d] transition-colors text-sm">
                <lucide_react_1.Download className="h-4 w-4"/>
                <span>Android</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <framer_motion_1.motion.div className="text-center" initial="initial" animate="animate" variants={fadeIn}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Billing <br />
              <span className="text-primary">Into Digital Magic</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Say goodbye to paper bills. Create, manage, and sync your invoices across all devices with our cloud-based smart billing system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#" className="flex items-center space-x-3 bg-[#0078D4] text-white px-6 py-4 rounded-lg hover:bg-[#006cbd] transition-colors w-full sm:w-auto justify-center">
                <lucide_react_1.Download className="h-6 w-6"/>
                <div>
                  <div className="text-xs">Get it from</div>
                  <div className="text-sm font-semibold">Microsoft Store</div>
                </div>
              </a>

              <a href="#" className="flex items-center space-x-3 bg-[#414141] text-white px-6 py-4 rounded-lg hover:bg-[#2d2d2d] transition-colors w-full sm:w-auto justify-center">
                <lucide_react_1.Download className="h-6 w-6"/>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div className="mt-20" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Smart Bill Book Dashboard" className="rounded-2xl shadow-2xl w-full animate-float"/>
          </framer_motion_1.motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <framer_motion_1.motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your billing efficiently</p>
          </framer_motion_1.motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                icon: <lucide_react_1.Cloud className="h-8 w-8 text-primary"/>,
                title: "Cloud Sync",
                description: "Real-time synchronization across all your devices"
            },
            {
                icon: <lucide_react_1.Receipt className="h-8 w-8 text-primary"/>,
                title: "Digital Bill Creation",
                description: "Convert handwritten bills to digital format instantly"
            },
            {
                icon: <lucide_react_1.BarChart3 className="h-8 w-8 text-primary"/>,
                title: "Product Management",
                description: "Seamlessly manage your product inventory"
            },
            {
                icon: <lucide_react_1.Printer className="h-8 w-8 text-primary"/>,
                title: "Multi-Printer Support",
                description: "Connect to any type of printer effortlessly"
            },
            {
                icon: <lucide_react_1.Camera className="h-8 w-8 text-primary"/>,
                title: "Automated Addition",
                description: "Scan and digitize paper bills automatically"
            },
            {
                icon: <lucide_react_1.BarChart3 className="h-8 w-8 text-primary"/>,
                title: "Sales Dashboard",
                description: "View interactive graphs and analytics of your sales performance"
            }
        ].map(function (feature, index) { return (<framer_motion_1.motion.div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </framer_motion_1.motion.div>); })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            {[
            { icon: <lucide_react_1.Zap className="h-8 w-8"/>, number: "10M+", label: "Bills Generated" },
            { icon: <lucide_react_1.Users className="h-8 w-8"/>, number: "50K+", label: "Happy Users" },
            { icon: <lucide_react_1.Cloud className="h-8 w-8"/>, number: "99.9%", label: "Uptime" }
        ].map(function (stat, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="flex flex-col items-center">
                {stat.icon}
                <span className="text-4xl font-bold mt-4">{stat.number}</span>
                <span className="text-primary-light">{stat.label}</span>
              </framer_motion_1.motion.div>); })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <framer_motion_1.motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600">Start managing your bills efficiently today</p>
          </framer_motion_1.motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
                name: "Free",
                price: "₹0",
                description: "Perfect for small businesses",
                features: [
                    "Offline Support",
                    "Manual entry of bills",
                    "Basic reporting",
                    "Access to single-device",
                    "Email support"
                ],
                cta: "Get Started",
                popular: false
            },
            {
                name: "Basic",
                price: "₹39",
                description: "Most popular for growing businesses",
                features: [
                    "Everything in Free",
                    "Cloud backup & sync",
                    "Multi-device access",
                    "Advanced reporting",
                    "Priority support",
                    "Sales analytics dashboard",
                    "Product management"
                ],
                cta: "Start Basic",
                popular: true
            },
            {
                name: "Enterprise",
                price: "₹99",
                description: "For large scale operations",
                features: [
                    "Everything in Basic",
                    "Custom branding",
                    "API access",
                    "Dedicated support",
                    "Team management",
                    "Advanced analytics",
                    "Custom integrations"
                ],
                cta: "Contact Sales",
                popular: false
            }
        ].map(function (plan, index) { return (<framer_motion_1.motion.div key={index} className={"relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group ".concat(plan.popular ? 'border-2 border-primary' : 'border-2 border-transparent hover:border-primary')} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                {plan.popular && (<div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    Most Popular
                  </div>)}
                <div className={"p-8 text-center transition-colors duration-300 ".concat(plan.popular ? 'bg-primary group-hover:bg-primary' : 'bg-gray-50 group-hover:bg-primary')}>
                  <h3 className={"text-2xl font-bold transition-colors duration-300 ".concat(plan.popular ? 'text-white' : 'text-gray-900 group-hover:text-white')}>
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className={"text-5xl font-bold transition-colors duration-300 ".concat(plan.popular ? 'text-white' : 'text-gray-900 group-hover:text-white')}>
                      {plan.price}
                    </span>
                    <span className={"transition-colors duration-300 ".concat(plan.popular ? 'text-white opacity-80' : 'text-gray-600 group-hover:text-white/80')}>
                      /month
                    </span>
                  </div>
                  <p className={"mt-4 transition-colors duration-300 ".concat(plan.popular ? 'text-white' : 'text-gray-600 group-hover:text-white')}>
                    {plan.description}
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map(function (feature, featureIndex) { return (<li key={featureIndex} className="flex items-center">
                        <lucide_react_1.Check className="h-5 w-5 text-primary mr-3"/>
                        <span className="text-gray-700">{feature}</span>
                      </li>); })}
                  </ul>
                  <div className="mt-8">
                    <a href="#" className={"block w-full py-3 px-6 rounded-lg text-center font-medium transition-all duration-300 ".concat(plan.popular
                ? 'bg-primary text-white hover:bg-primary hover:border-2 hover:border-primary'
                : 'bg-gray-100 text-gray-900 group-hover:bg-primary group-hover:text-white hover:border-2 hover:border-primary')}>
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </framer_motion_1.motion.div>); })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <framer_motion_1.motion.div className="bg-gray-900 rounded-3xl p-12 text-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Billing?</h2>
            <p className="text-xl text-gray-400 mb-8">Join thousands of businesses that trust Smart Bill Book</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#" className="flex items-center space-x-3 bg-[#0078D4] text-white px-6 py-4 rounded-lg hover:bg-[#006cbd] transition-colors w-full sm:w-auto justify-center">
                <lucide_react_1.Download className="h-6 w-6"/>
                <div>
                  <div className="text-xs">Get it from</div>
                  <div className="text-sm font-semibold">Microsoft Store</div>
                </div>
              </a>

              <a href="#" className="flex items-center space-x-3 bg-[#414141] text-white px-6 py-4 rounded-lg hover:bg-[#2d2d2d] transition-colors w-full sm:w-auto justify-center">
                <lucide_react_1.Download className="h-6 w-6"/>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </framer_motion_1.motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo.png" alt="Smart Bill Book Logo" className="h-8 w-8"/>
              <span className="ml-2 text-xl font-bold text-gray-900">Smart Bill Book</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-primary">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>© 2024 Smart Bill Book. All rights reserved.</p>
            <p className="mt-2">Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </footer>
    </div>);
}
exports.default = App;
