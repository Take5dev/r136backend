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
      Attribute.DefaultTo<'Submit'>;
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
      Attribute.DefaultTo<'Submit your project'>;
  };
}

export interface HomepageForm extends Schema.Component {
  collectionName: 'components_homepage_forms';
  info: {
    displayName: 'Form';
    icon: 'layer';
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
      Attribute.DefaultTo<'I consent to share my personal data and accept Privacy Policy'>;
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

export interface HomepageVision extends Schema.Component {
  collectionName: 'components_homepage_visions';
  info: {
    displayName: 'Vision';
    icon: 'eye';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'We Back the Brightest and Help Them Scale'>;
    text: Attribute.Text &
      Attribute.DefaultTo<'R136 works with creative entrepreneurs to scale their mid-to-late stage startups with a unique blend of expertise and experience that unlocks their potential. Many of us have been CEOs, CTOs and c-level execs at corporations and young companies \u2013 we\u2019ve done this before. We help shape your vision, strategy, execution and talent. Our partners managed more than $400 million in assets and have funded more than 30 companies.'>;
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

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'global.header': GlobalHeader;
      'homepage.contact': HomepageContact;
      'homepage.focused-cards': HomepageFocusedCards;
      'homepage.focused': HomepageFocused;
      'homepage.form': HomepageForm;
      'homepage.hero-slider': HomepageHeroSlider;
      'homepage.hero': HomepageHero;
      'homepage.mission': HomepageMission;
      'homepage.office': HomepageOffice;
      'homepage.overlay': HomepageOverlay;
      'homepage.table-cell': HomepageTableCell;
      'homepage.table': HomepageTable;
      'homepage.vision': HomepageVision;
      'seo.seo': SeoSeo;
    }
  }
}
