import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import FadeMotion from "./FadeMotion";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Varikkan ",
    position: "Graphics designer ",
    company: "TechVision Inc.",
    image: "/src/assets/Testimonials/varikan.jpg",
    quote:
      "ഈ ഏജൻസി ഞങ്ങൾക്ക് ആഗ്രഹിച്ച ROI(return on investment) ലഭ്യമാക്കി. ഒരു പ്രൊഫഷണൽ, വിശ്വസനീയമായ ഡിജിറ്റൽ മാർക്കറ്റിംഗ് പങ്കാളിയെ അന്വേഷിക്കുന്നവർക്ക് ഞാൻ ഇതിനെ തീർച്ചയായും ശുപാർശ ചെയ്യുന്നു!",
    rating: 4,
  },
  {
    name: "Fahad Bin Azeez",
    position: "Document controller",
    company: "Vandalz",
    image: "/src/assets/Testimonials/Screenshot 2024-12-30 230419.png",
    quote:
      "The team at DigitalPulse doesn't just deliver results; they become true partners in your business growth. Their data-driven approach and creative strategies have been instrumental in our success.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "E-commerce Manager",
    company: "LuxuryStay Hotels",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    quote:
      "The PPC campaign DigitalPulse created for us delivered an ROI of 400%. Their attention to detail and continuous optimization made all the difference in our digital advertising efforts.",
    rating: 5,
  },
  {
    name: "David Anderson",
    position: "CTO",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218",
    quote:
      "DigitalPulse's expertise in UX/UI design helped us launch an intuitive platform that improved user engagement by 35%. Their dedication to quality is unmatched.",
    rating: 5,
  },
  {
    name: "Jessica Lee",
    position: "Founder",
    company: "Wellness Hub",
    image: "https://images.unsplash.com/photo-1524255684952-d7185b509571",
    quote:
      "Thanks to DigitalPulse, our social media engagement grew by 150% in three months. Their team understands branding like no other!",
    rating: 5,
  },
  {
    name: "Daniel Martinez",
    position: "Product Manager",
    company: "NextGen Tech",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    quote:
      "DigitalPulse helped us streamline our digital marketing strategy, leading to a 60% increase in customer acquisition. Their expertise is truly invaluable.",
    rating: 5,
  },
  {
    name: "Sophia Brown",
    position: "Creative Director",
    company: "Bright Ideas Agency",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    quote:
      "From branding to web design, DigitalPulse exceeded our expectations. Their team is incredibly talented and easy to work with.",
    rating: 5,
  },
];

const MAX_LENGTH = 120; // Max text length before "Show More" appears

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeMotion direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-indigo-600 font-medium text-lg">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say
              about working with DigitalPulse.
            </p>
          </div>
        </FadeMotion>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500, // Faster auto-slide
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="testimonials-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <FadeMotion direction="up" delay={index * 0.2}>
                <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-[320px] flex flex-col justify-between">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-indigo-100" />

                  <div>
                    <div className="flex space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <ExpandableText text={testimonial.quote} />
                  </div>

                  <div className="flex items-center mt-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeMotion>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Expandable Text Component
const ExpandableText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const truncatedText = text.length > MAX_LENGTH ? text.substring(0, MAX_LENGTH) + "..." : text;

  return (
    <div>
      <p className="text-gray-700 mb-1">{expanded ? text : truncatedText}</p>
      {text.length > MAX_LENGTH && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Testimonials;
