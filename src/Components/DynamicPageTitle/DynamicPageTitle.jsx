import { Helmet } from "react-helmet";

const DynamicPageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>ToyVers | {title}</title>
      </Helmet>
    </div>
  );
};

export default DynamicPageTitle;
