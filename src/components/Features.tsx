import Star from "../assets/icons/Star.svg";
import Support from "../assets/icons/support.svg";
import Secured from "../assets/icons/secured.svg";

export const features = [
  {
    id: "feature-1",
    icon: Support,
    title: "24/7 Support",
    content:
      "Our dedicated team of IT experts is at your service around the clock, ensuring that any technical issues or concerns are addressed promptly, no matter when they arise. You can count on us 24 hours a day, 7 days a week, 365 days a year.",
  },
  {
    id: "feature-2",
    icon: Star,
    title: "Rewards",
    content:
      "Ensure your website looks amazing on any device. Our responsive design guarantees a flawless user experience on desktops, tablets, and smartphones.",
  },
  {
    id: "feature-3",
    icon: Secured,
    title: "100% Secured",
    content:
      "Rest easy knowing your website and data are secure. We prioritize the safety of your online presence.",
  },
];
export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl tracking-tighter">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the website.
        </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-center mt-5 text-xl text-white/70">
          Empower your creativity, showcase your passion, and connect with your
          audience like never before. Whether you're a business owner,
          creative professional, or simply want to share your ideas with the
          world, ITAdvisX is your partner in online success.
        </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, content, icon: Icon }) => (
            <div
              key={title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl flex-grow min-h-[300px] flex flex-col justify-between sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg mx-auto">
                <Icon />
              </div>
              <h3 className="mt-6 font-bold">{title}</h3>
              <p className="mt-2 text-white/70">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
