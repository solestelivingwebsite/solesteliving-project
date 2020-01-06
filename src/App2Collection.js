import React, { Component } from "react";
import { Helmet } from "react-helmet";
import EachPageHeader from "./components/EachPageHeader";
import PropertyRight from "./components/app2Collection/PropertyRight";
import PropertyLeft from "./components/app2Collection/PropertyLeft";
import SectionBanner from "./components/app2Collection/SectionBanner";
import FooterPage from "./components/FooterPage";
import app2bluelagoonimg1 from "./images/app2/app2-blue-lagoon-img-1.jpg";
import app2bluelagoonimg2 from "./images/app2/app2-blue-lagoon-img-2.jpg";
import app2twenty2img1 from "./images/app2/app2-twenty2-img-1.jpg";
import app2twenty2img2 from "./images/app2/app2-twenty2-img-2.jpg";
import app2alamedaimg1 from "./images/app2/app2-alameda-img-1.jpg";
import app2alamedaimg2 from "./images/app2/app2-alameda-img-2.jpg";
import app2bayvillageimg1 from "./images/app2/app2-bayvillage-img-1.jpg";
import app2bayvillageimg2 from "./images/app2/app2-bayvillage-img-2.jpg";
import app2grandcentralimg1 from "./images/app2/app2-grandcentral-img-1.jpg";
import app2grandcentralimg2 from "./images/app2/app2-grandcentral-img-2.jpg";
import app2springgardensimg1 from "./images/app2/app2-springgardens-img-1.jpg";
import app2springgardensimg2 from "./images/app2/app2-springgardens-img-2.jpg";

class App2 extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Soleste Living | Collection</title>
          <meta name="description" content="Helmet application" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <EachPageHeader
          pageBACKGROUND="app2Collection-header-bg"
          pageNAME="COLLECTION"
        ></EachPageHeader>
        <PropertyLeft
          propertyIMAGE1={app2bluelagoonimg1}
          propertyIMAGE2={app2bluelagoonimg2}
          propertyNAME="BLUE LAGOON"
          propertyDESCRIPTION="Studio, One, Two, and Three-Bedroom Apartment"
          propertyDESCRIPTION2="Homes starting at "
          propertyPRICE="$1,499"
          propertyPAGE="/bluelagoon"
          propertyNOWLEASING="NOW LEASING"
          propertyMOVEINDATE="MOVE-IN OCTOBER 2019"
        ></PropertyLeft>
        <PropertyRight
          propertyIMAGE1={app2twenty2img1}
          propertyIMAGE2={app2twenty2img2}
          propertyNAME="TWENTY2"
          propertyDESCRIPTION="Studio, One, Two, and Three-Bedroom Apartment"
          propertyDESCRIPTION2="Homes starting at "
          propertyPRICE="$1,499"
          propertyPAGE="/twenty2"
          propertyNOWLEASING="NOW LEASING"
          propertyMOVEINDATE="MOVE-IN OCTOBER 2019"
        ></PropertyRight>
        <PropertyLeft
          propertyIMAGE1={app2alamedaimg1}
          propertyIMAGE2={app2alamedaimg2}
          propertyNAME="ALAMEDA"
          propertyDESCRIPTION="Studio, One and Two-Bedroom Apartment Homes starting"
          propertyDESCRIPTION2="Homes starting at"
          propertyPRICE="$1,475"
          propertyPAGE="/alameda"
          propertyNOWLEASING="PRE-LEASING JANUARY 2020"
          propertyMOVEINDATE="MOVE-IN MARCH 2020"
        ></PropertyLeft>

        <SectionBanner></SectionBanner>

        <PropertyRight
          propertyIMAGE1={app2bayvillageimg1}
          propertyIMAGE2={app2bayvillageimg2}
          propertyNAME="BAY VILLAGE"
          propertyDESCRIPTION="Studio, One, Two, and Three-Bedroom Apartment"
          propertyDESCRIPTION2="Homes starting at "
          propertyPRICE="$1,500"
          propertyPAGE="/bayvillage"
          propertyNOWLEASING="PRE-LEASING NOVEMBER 2019"
          propertyMOVEINDATE="MOVE-IN MARCH 2020"
        ></PropertyRight>
        <PropertyLeft
          propertyIMAGE1={app2grandcentralimg1}
          propertyIMAGE2={app2grandcentralimg2}
          propertyNAME="GRAND CENTRAL"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom Apartment Homes"
          propertyDESCRIPTION2="Apartment Homes"
          propertyPAGE="grandcentral"
          propertyNOWLEASING="PRE-LEASING JANUARY 2021"
          propertyMOVEINDATE="MOVE-IN MARCH 2021"
        ></PropertyLeft>
        <PropertyRight
          propertyIMAGE1={app2springgardensimg1}
          propertyIMAGE2={app2springgardensimg2}
          propertyNAME="SPRING GARDENS"
          propertyDESCRIPTION="Studio Suites, One, Two, and Three-Bedroom"
          propertyDESCRIPTION2="Apartment Homes"
          propertyPAGE="springgardens"
          propertyNOWLEASING="PRE-LEASING MARCH 2021"
          propertyMOVEINDATE="MOVE-IN JUNE 2021"
        ></PropertyRight>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <FooterPage></FooterPage>
      </div>
    );
  }
}
export default App2;