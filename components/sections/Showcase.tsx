import Image from "next/image";
import "@/styles/showcase.css";
import { ShowcaseProps } from "@/types/showcase";
import PrimaryButton from "../buttons/PrimaryButton";
import { SectionProps } from "@/types/sectionProps";

const Showcase = ({ className = "", data }: ShowcaseProps) => {
    const {
        button
    } = data || {};
  return (
    <section className={`showcase ${className}`}>
      {/* LEFT CONTENT */}
      <div className="content">
        <h1>
          {data.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
            
          ))}
          {/* <spa
          n className="highlight">{data.highlightText}</span> */}

        </h1>
         
       
        <p>
          {data.description.split("\n").map((text, i) => (
            <span key={i}>
              {text}
            </span>
          ))}
        </p>

        <PrimaryButton
  label={button?.label || ''}
  href={button?.href || '#'}
  ariaLabel={button?.label || ''}
/>
      </div>

      {/* RIGHT GALLERY */}
      <div className="gallery">
        <div className="column columnUp">
          {data.galleryUp.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt || ""}
              width={260}
              height={360}
            />
          ))}
        </div>

        <div className="column columnDown">
          {data.galleryDown.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt || ""}
              width={260}
              height={360}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;