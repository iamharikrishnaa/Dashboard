import React from 'react';

const Programs = () => {
    return (
        <div className="selected-ages-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">What We Offer</span>
                    <h2 className="font-weight-black">Services & Programs</h2>
                    <p>Explore all of our services and programs, and select suitable for our children!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-selected-ages-box">
                            <div className="image">
                                <img src="/images/selected-ages/selected-age8.png" alt="image" />
                            </div>

                            <div className="content">
                                <h3>Early Intervention</h3>
                                <p>This program is designed precisely for children within the age groups of 1.5 years to 6 years. The agenda of this program is to support and aid young children with developmental delays and disabilities. When a child undergoes the training in this routine, he/she gains a significant impact on their abilities to learn new skills and overcome challenges in everyday life.</p>
                                <a href="/programs/"><span className="ages-number">Learn More</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-selected-ages-box">
                            <div className="image">
                                <img src="/images/selected-ages/selected-age6.png" alt="image" />
                            </div>

                            <div className="content">
                                <h3>Academic Intervention</h3>
                                <p>This program caters to children up to the 7th grade. It brings in an all-inclusive education approach that revolves around teaching new skills to a child and also to train him/her on how to apply the existing skills more effectively. For children who experience intricacy in a classroom and following its etiquettes, the strategies under this plan safeguard such complications. This also helps to improvise a child’s school performance.</p>
                                <a href="/programs/"><span className="ages-number">Learn More</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-selected-ages-box">
                            <div className="image">
                                <img src="/images/selected-ages/selected-age7.png" alt="image" />
                            </div>

                            <div className="content">
                                <h3>Therapy</h3>
                                <p>This is a well-structured program with multiple distinctive therapies. Each therapy in the arrangement works on diverse pains and problems. From speech problems to temperament issues, discrete therapies aid various aspects of a child’s complexities. The parental education and family counseling vertical in this program is an incredibleinitiative that helps parents to develop a better understanding of their children.</p>
                                <a href="/programs/"><span className="ages-number">Learn More</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape15">
                <img src="/images/kindergarten-shape/k-shape15.png" alt="image" />
            </div>
            <div className="kindergarten-shape16">
                <img src="/images/kindergarten-shape/k-shape16.png" alt="image" />
            </div>
        </div>
    )
}

export default Programs;