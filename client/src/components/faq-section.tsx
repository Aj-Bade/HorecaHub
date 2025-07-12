import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown, HelpCircle, MessageSquare, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import type { FAQ } from "@shared/schema";

const FAQSection = () => {
  const { data: faqs, isLoading } = useQuery<FAQ[]>({
    queryKey: ["/api/faqs"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-16 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-brand-golden/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 px-4 py-2 text-sm font-medium">
              <HelpCircle className="h-4 w-4 mr-2" />
              Get Help • 24/7 Support
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our platform and discover how Horeca1 can transform your restaurant supply chain
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={fadeInUp}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between text-left">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-brand-golden rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-brand-charcoal group-hover:text-brand-orange transition-colors">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown className="h-5 w-5 text-brand-orange transition-transform group-hover:text-brand-golden" />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="ml-12">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Support section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-brand-orange to-brand-golden rounded-3xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-white/90">Our support team is available 24/7 to help you with any queries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-sm text-white/80 mb-4">+91 98765 43210</p>
              <Button className="bg-white text-brand-orange hover:bg-gray-100 text-sm">
                Call Now
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-sm text-white/80 mb-4">support@horeca1.com</p>
              <Button className="bg-white text-brand-orange hover:bg-gray-100 text-sm">
                Send Email
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-sm text-white/80 mb-4">Chat with our experts</p>
              <Button className="bg-white text-brand-orange hover:bg-gray-100 text-sm">
                Start Chat
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
