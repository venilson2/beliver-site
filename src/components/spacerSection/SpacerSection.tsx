interface SpacerSectionProps {
    subtitle?: string;
    title?: string;
  }
  
  const SpacerSection = ({ subtitle, title }: SpacerSectionProps) => {
    return (
      <>
        <section id="featured" className="site-featured">
          <div id="featured-media" className="featured-media has-overlay">
            <div className="wrapper">
              <div className="page-title">
                <h6 className="tagline">{subtitle}</h6>
                <h1 className="display">{title}</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default SpacerSection;
  