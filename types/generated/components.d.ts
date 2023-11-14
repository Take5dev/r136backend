import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
    icon: 'filter';
    description: '';
  };
  attributes: {
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Get In Touch'>;
    visionMenuLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Vision'>;
    missionMenuLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Mission'>;
    focusedMenuLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Where we invest'>;
    contactMenuLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Contact Us'>;
    collapsedMenuLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Menu'>;
    howDoWeHelpLabel: Attribute.String & Attribute.DefaultTo<'How do we help'>;
    teamLabel: Attribute.String & Attribute.DefaultTo<'Team'>;
    contentInsightsLabel: Attribute.String &
      Attribute.DefaultTo<'Content & insights'>;
    testimonialsLabel: Attribute.String & Attribute.DefaultTo<'Testimonials'>;
    portfolioLabel: Attribute.String & Attribute.DefaultTo<'Portfolio'>;
  };
}

export interface HomepageContact extends Schema.Component {
  collectionName: 'components_homepage_contacts';
  info: {
    displayName: 'Contact';
    icon: 'earth';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Contacts'>;
    office: Attribute.Component<'homepage.office', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
        max: 3;
      }>;
  };
}

export interface HomepageContentAndInsights extends Schema.Component {
  collectionName: 'components_homepage_content_and_insights';
  info: {
    displayName: 'Content & Insights';
    icon: 'information';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Latest content & Insights'>;
    lead: Attribute.String &
      Attribute.DefaultTo<'Please check out our most recent insights based on our view of today\u2019s markets. If you would like to see other commentary from our team, please contact us.'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'View all'>;
    lastCardLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'View all'>;
  };
}

export interface HomepageFocusedCards extends Schema.Component {
  collectionName: 'components_homepage_focused_cards';
  info: {
    displayName: 'Focused Cards';
    icon: 'discuss';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface HomepageFocused extends Schema.Component {
  collectionName: 'components_homepage_focuseds';
  info: {
    displayName: 'Focused';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We Are Focused Investors'>;
    textLeft: Attribute.Text &
      Attribute.DefaultTo<'R136 is primarily focused on established companies that are ready to scale and move through mid-to-late funding stages.'>;
    textRight: Attribute.Text &
      Attribute.DefaultTo<'Your specific funding stage is less important than the state of your organization and your interest in scaling rapidly to gain new market opportunities.'>;
    cardsTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'A company is established if:'>;
    focusedCards: Attribute.Component<'homepage.focused-cards', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
        max: 3;
      }>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Get In Touch'>;
  };
}

export interface HomepageForm extends Schema.Component {
  collectionName: 'components_homepage_forms';
  info: {
    displayName: 'Form';
    icon: 'layer';
    description: '';
  };
  attributes: {
    requiredError: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'The field is required'>;
    emailIncorrectError: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Please write a correct e-mail'>;
    namePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Name *'>;
    titlePlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Title'>;
    companyPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Company *'>;
    countryPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Country where headquartered'>;
    emailPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Email *'>;
    textareaPlaceholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'How can we help?'>;
    privacyPolicyLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'I consent to share my personal data and accept '>;
    communicationLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'I agree to receive communication from R136'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Submit'>;
    errorMessage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Sorry, an error occurred - please, try again'>;
    successMessage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Thank you, the message was sent successfully'>;
    privacyPolicyLink: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Privacy Policy'>;
  };
}

export interface HomepageHeroSlider extends Schema.Component {
  collectionName: 'components_homepage_hero_sliders';
  info: {
    displayName: 'Hero Slider';
    icon: 'bulletList';
  };
  attributes: {
    h1: Attribute.RichText & Attribute.Required;
    lead: Attribute.String;
  };
}

export interface HomepageHero extends Schema.Component {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    heroSlider: Attribute.Component<'homepage.hero-slider', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 2;
      }>;
  };
}

export interface HomepageHowDoWeHelpSection extends Schema.Component {
  collectionName: 'components_homepage_how_do_we_help_sections';
  info: {
    displayName: 'How do we Help Section';
    icon: 'check';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface HomepageHowDoWeHelp extends Schema.Component {
  collectionName: 'components_homepage_how_do_we_helps';
  info: {
    displayName: 'How do we help';
    icon: 'doctor';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Now Comes the Hard Part'>;
    lead: Attribute.String &
      Attribute.DefaultTo<'You\u2019ve taken your concept, built a team, navigated through various challenges in launching a growing business. Now comes the hard part \u2013 scaling your organization to meet the next set of challenges.'>;
    rightText: Attribute.String &
      Attribute.DefaultTo<'Any VC can write a check, but you need a partner to provide guidance through difficult questions such as:'>;
    area: Attribute.Component<'homepage.how-do-we-help-section', true>;
  };
}

export interface HomepageMission extends Schema.Component {
  collectionName: 'components_homepage_missions';
  info: {
    displayName: 'Mission';
    icon: 'handHeart';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Mission'>;
    textLeft: Attribute.Text &
      Attribute.DefaultTo<'R136 invests in mid- and late-stage startups that have created promising concepts and provides the resources, guidance and expertise that helps them rapidly scale.'>;
    textRight: Attribute.Text &
      Attribute.DefaultTo<'We bring to bear our unique experience building and operating large organizations in b2b tech and fintech. We provide global expertise but are a local firm in the regions we serve.'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Get In Touch'>;
  };
}

export interface HomepageOffice extends Schema.Component {
  collectionName: 'components_homepage_offices';
  info: {
    displayName: 'Office';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    location: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    globeLeftPosition: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }>;
    globeTopPosition: Attribute.Float &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
        max: 100;
      }>;
    pointLabelOnTop: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface HomepageOverlay extends Schema.Component {
  collectionName: 'components_homepage_overlays';
  info: {
    displayName: 'Overlay';
    icon: 'monitor';
  };
  attributes: {
    heading: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'<span>Mobile version</span> <span>is under development</span>'>;
    lead: Attribute.String &
      Attribute.DefaultTo<'Please switch to the desktop version for a better experience'>;
  };
}

export interface HomepagePage500 extends Schema.Component {
  collectionName: 'components_homepage_page_500s';
  info: {
    displayName: 'Page 500';
    icon: 'earth';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required & Attribute.DefaultTo<'500'>;
    subheading: Attribute.String & Attribute.DefaultTo<'Internal Server Error'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Go to Homepage'>;
  };
}

export interface HomepagePage404 extends Schema.Component {
  collectionName: 'components_homepage_page404s';
  info: {
    displayName: 'page404';
    icon: 'earth';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required & Attribute.DefaultTo<'404'>;
    subheading: Attribute.String & Attribute.DefaultTo<'Page not found'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Go to Homepage'>;
  };
}

export interface HomepagePartnerItem extends Schema.Component {
  collectionName: 'components_homepage_partner_items';
  info: {
    displayName: 'Partner Item';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
  };
}

export interface HomepagePortfolio extends Schema.Component {
  collectionName: 'components_homepage_portfolios';
  info: {
    displayName: 'Portfolio';
    icon: 'grid';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Investment Portfolio'>;
    lead: Attribute.String &
      Attribute.DefaultTo<'We work with entrepreneurs to provide the capital, in-depth technical knowledge, access to talent and mature investment processes to scale their successful startups.'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Go to Portfolio'>;
  };
}

export interface HomepagePrivacyPolicy extends Schema.Component {
  collectionName: 'components_homepage_privacy_policies';
  info: {
    displayName: 'Privacy Policy';
    icon: 'shield';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
  };
}

export interface HomepageTableCell extends Schema.Component {
  collectionName: 'components_homepage_table_cells';
  info: {
    displayName: 'Table Cell';
    icon: 'check';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface HomepageTable extends Schema.Component {
  collectionName: 'components_homepage_tables';
  info: {
    displayName: 'Table';
    icon: 'grid';
  };
  attributes: {
    rowTitle: Attribute.String & Attribute.Required;
    cell: Attribute.Component<'homepage.table-cell', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface HomepageTeam extends Schema.Component {
  collectionName: 'components_homepage_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Your Partners for&nbsp;Growth'>;
    lead: Attribute.String &
      Attribute.DefaultTo<'R136 is led by a team of partners who possess unique expertise and experience in building and operating some of the largest companies in the world.'>;
    popupPortfolioLabel: Attribute.String &
      Attribute.DefaultTo<'Selected angel portfolio:'>;
  };
}

export interface HomepageTestimonials extends Schema.Component {
  collectionName: 'components_homepage_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'message';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Testimonials'>;
    buttonLabel: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'View more'>;
    lead: Attribute.RichText;
  };
}

export interface HomepageVision extends Schema.Component {
  collectionName: 'components_homepage_visions';
  info: {
    displayName: 'Vision';
    icon: 'eye';
    description: '';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We Back the Brightest and Help Them Scale'>;
    lead: Attribute.RichText;
  };
}

export interface HomepageWeAreThePartnerThatMatters extends Schema.Component {
  collectionName: 'components_homepage_we_are_the_partner_that_matters';
  info: {
    displayName: 'We are the Partner that Matters';
    icon: 'shield';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We are the Partner that Matters'>;
    lead: Attribute.String &
      Attribute.DefaultTo<'How we formed R136 mirrors the startups we invest in, by bringing different types of skills and expertise together with a mission. R136 Ventures helps our partners identify opportunities and overcome challenges to develop and grow.'>;
    textRight: Attribute.String &
      Attribute.DefaultTo<'When you partner with us, we bring value focusing on four key areas:'>;
    item: Attribute.Component<'homepage.partner-item', true>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'R136'>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    canonicalUrl: Attribute.String;
    ogLocale: Attribute.String & Attribute.DefaultTo<'en_US'>;
    ogType: Attribute.String & Attribute.DefaultTo<'article'>;
    ogTitle: Attribute.String;
    ogDescription: Attribute.String;
    ogSiteName: Attribute.String;
    ogImage: Attribute.Media;
    author: Attribute.String & Attribute.DefaultTo<'r136'>;
    twitterTitle: Attribute.String;
    twitterDescription: Attribute.String;
    twitterImage: Attribute.Media;
  };
}

export interface TeamLinks extends Schema.Component {
  collectionName: 'components_team_links';
  info: {
    displayName: 'Links';
    icon: 'link';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    label: Attribute.String & Attribute.Required;
  };
}

export interface TeamPosition extends Schema.Component {
  collectionName: 'components_team_positions';
  info: {
    displayName: 'Position';
    icon: 'briefcase';
  };
  attributes: {
    position: Attribute.String & Attribute.Required;
  };
}

export interface TeamSelectedPortfolio extends Schema.Component {
  collectionName: 'components_team_selected_portfolios';
  info: {
    displayName: 'Selected Portfolio';
    icon: 'puzzle';
  };
  attributes: {
    logo: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.header': GlobalHeader;
      'homepage.contact': HomepageContact;
      'homepage.content-and-insights': HomepageContentAndInsights;
      'homepage.focused-cards': HomepageFocusedCards;
      'homepage.focused': HomepageFocused;
      'homepage.form': HomepageForm;
      'homepage.hero-slider': HomepageHeroSlider;
      'homepage.hero': HomepageHero;
      'homepage.how-do-we-help-section': HomepageHowDoWeHelpSection;
      'homepage.how-do-we-help': HomepageHowDoWeHelp;
      'homepage.mission': HomepageMission;
      'homepage.office': HomepageOffice;
      'homepage.overlay': HomepageOverlay;
      'homepage.page-500': HomepagePage500;
      'homepage.page404': HomepagePage404;
      'homepage.partner-item': HomepagePartnerItem;
      'homepage.portfolio': HomepagePortfolio;
      'homepage.privacy-policy': HomepagePrivacyPolicy;
      'homepage.table-cell': HomepageTableCell;
      'homepage.table': HomepageTable;
      'homepage.team': HomepageTeam;
      'homepage.testimonials': HomepageTestimonials;
      'homepage.vision': HomepageVision;
      'homepage.we-are-the-partner-that-matters': HomepageWeAreThePartnerThatMatters;
      'seo.seo': SeoSeo;
      'team.links': TeamLinks;
      'team.position': TeamPosition;
      'team.selected-portfolio': TeamSelectedPortfolio;
    }
  }
}
