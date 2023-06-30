import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training",
    description:
      "Our weight training program at our gym is designed to help you build strength, increase muscle mass, and sculpt your physique. With a focus on proper form and technique.",
    image: image1,
  },
  {
    name: "Core & strength training",
    description:
      "Our strength training program is geared towards enhancing overall functional strength and improving athletic performance. Our trainers will introduce you to compound exercises, targeted muscle group training, and progressive overload techniques to maximize your strength gains.",
    image: image2,
  },
  {
    name: "Powerlifting",
    description:
      "If you're passionate about powerlifting, our dedicated powerlifting program is designed to take your strength to new heights. Learn proper technique for the squat, bench press, and deadlift under the guidance of experienced powerlifting coaches.",
    image: image3,
  },
  {
    name: "Cross-fit & Zumba Classes",
    description:
      "Take your fitness to the next level with our dynamic and high-intensity CrossFit program. Combining elements of weightlifting, cardiovascular conditioning, and functional movements, CrossFit workouts are designed to challenge your limits and improve your overall fitness.",
    image: image4,
  },
  {
    name: "Yoga & Meditation",
    description:
      "Discover the perfect balance of mind, body, and soul with our invigorating yoga classes. Led by certified instructors, our yoga program offers a variety of styles and levels, including Hatha, Vinyasa, and Yin yoga. Strengthen your core, improve flexibility, and enhance mental clarity as you flow through poses and focus on deep breathing and relaxation.",
    image: image5,
  },
  {
    name: "Gymnastics",
    description:
      "Our gymnastics program focuses on developing core strength, flexibility, balance, coordination, and body control. Through a progressive curriculum, you'll learn and master various apparatus such as the floor exercise, balance beam, uneven bars, and vault.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-100%">
            <HText>OUR TRAINING PROGRAMS</HText>
            <p className="py-5">
              With our experienced team of fitness experts, cutting-edge
              training programs, and a supportive community, we're here to guide
              you every step of the way. Whether you're looking to build
              strength, improve endurance, lose weight, or simply enhance your
              overall well-being, we have the tools and expertise to help you
              succeed
            </p>
          </div>
        </motion.div>
        <div className=" mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px]  whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
