import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import SplitText from "../common/SplitText";
import Tilt from "react-parallax-tilt";
import { slugify } from "../../utils";
import CaseStudyData from "../../data/CaseStudies.json";

const CaseStudyThree = () => {
    return (
        <div className="axil-case-study-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Our Services"
                            subtitle="what we do"
                            color="extra10-color"
                            alignment="left"
                        />
                    </div>
                </div>
                <div className="row row--45">
                    {CaseStudyData.map((service, index) => (
                        <div key={service.id} className="col-lg-4 col-md-6 col-12">
                            <div className="axil-case-study">
                                <div className="content">
                                    <div className="inner">
                                        <span className="category">
                                            {service.category.join(", ")}
                                        </span>
                                        <h4 className="title">
                                            <Link href={`/services/${slugify(service.title)}`}>
                                                <a>
                                                    <SplitText>
                                                        {service.title}
                                                    </SplitText>
                                                </a>
                                            </Link>
                                        </h4>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                                <div className="mockup">
                                    <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
                                        <Image
                                            width={service.thumbnail.width}
                                            height={service.thumbnail.height}
                                            className="paralax-image w-100"
                                            src={service.thumbnail.src}
                                            alt={service.title}
                                        />
                                    </Tilt>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyThree;
