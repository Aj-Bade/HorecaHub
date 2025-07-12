import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our platform
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {faqs?.map((faq) => (
            <motion.div
              key={faq.id}
              variants={fadeInUp}
            >
              <Card className="shadow-lg">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between text-left">
                        <h3 className="text-xl font-semibold text-brand-charcoal">
                          {faq.question}
                        </h3>
                        <ChevronDown className="h-5 w-5 text-brand-orange transition-transform" />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
