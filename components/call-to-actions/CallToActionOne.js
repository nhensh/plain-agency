import SectionTitle from '../common/SectionTitle';
import { CONTACT_INFO } from "../../constants/contact";

const CallToActionOne = () => {
    return (
        <div className="axil-call-to-action-area shape-position ax-section-gap theme-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="axil-call-to-action">
                            <SectionTitle
                                title="Need a successful project?"
                                subtitle="Let's work together"
                                color="extra04-color"
                                alignment="center"
                            />
                            <div className="text-center">
                                <a className="axil-button btn-large btn-transparent" href="#">
                                    <span className="button-text">Estimate Project</span>
                                    <span className="button-icon"/>
                                </a>
                                <div className="callto-action">
                                    <span className="text">
                                      Or call us now
                                    </span>
                                    <div className="number">
                                        <i className="fas fa-phone-alt"/>
                                        <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneFormatted}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-01">
                    <i className="icon icon-shape-14"/>
                </div>
                <div className="shape shape-02">
                    <i className="icon icon-shape-09"/>
                </div>
                <div className="shape shape-03">
                    <i className="icon icon-shape-10"/>
                </div>
                <div className="shape shape-04">
                    <i className="icon icon-shape-11"/>
                </div>
            </div>
        </div>
    );
};

export default CallToActionOne;
