import heroImage from "@/assets/heroimage.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50 relative">
      
      {/* ✅ SEO H1 – visible to search engines, hidden from UI */}
      <h1 className="sr-only">
        REACH Furniture Nester – Furniture Nesting and Cutting Optimization Software
      </h1>

      {/* Hero Wrapper */}
      <div
        className="
          relative
          w-full
          flex
          items-center
          justify-center
          overflow-hidden
        "
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* Hero Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            filter: "brightness(0.95) contrast(0.9)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
