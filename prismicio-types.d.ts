// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → navigation*
 */
export interface FooterDocumentDataNavigationItem {
  /**
   * link field in *Footer → navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *Footer → navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Footer → Socials*
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * Social Platform field in *Footer → Socials*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].social_platform
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  social_platform: prismic.SelectField<
    "instagram" | "linkedin" | "discord" | "youtube"
  >;

  /**
   * link field in *Footer → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * navigation field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<FooterDocumentDataNavigationItem>>;

  /**
   * Socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socials: prismic.GroupField<Simplify<FooterDocumentDataSocialsItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *Header → Navigation*
 */
export interface HeaderDocumentDataNavigationItem {
  /**
   * Label field in *Header → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Header → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Navigation field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | CallToActionSlice
  | TestemonialsSlice
  | TeamMembersSlice
  | ShowcaseSlice
  | SponsorsSlice
  | HeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

type LayoutDocumentDataSlicesSlice = MenuItemSlice;

type LayoutDocumentDataSlices1Slice = MenuItemSlice;

/**
 * Content for Layout documents
 */
interface LayoutDocumentData {
  /**
   * Slice Zone field in *Layout*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.slices[]
   * - **Tab**: Header
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LayoutDocumentDataSlicesSlice> /**
   * Slice Zone field in *Layout*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: layout.slices1[]
   * - **Tab**: Footer
   * - **Documentation**: https://prismic.io/docs/field#slices
   */;
  slices1: prismic.SliceZone<LayoutDocumentDataSlices1Slice>;
}

/**
 * Layout document from Prismic
 *
 * - **API ID**: `layout`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LayoutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LayoutDocumentData>,
    "layout",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | SubsectionsSlice
  | ProjectsSlice
  | ArticleSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * title field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

interface SettingsDocumentData {}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

type SubMenuDocumentDataSlicesSlice = SubMenuItemSlice | HeadingSlice;

/**
 * Content for Sub menu documents
 */
interface SubMenuDocumentData {
  /**
   * Slice Zone field in *Sub menu*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SubMenuDocumentDataSlicesSlice>;
}

/**
 * Sub menu document from Prismic
 *
 * - **API ID**: `sub_menu`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubMenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SubMenuDocumentData>,
    "sub_menu",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | HeaderDocument
  | HomeDocument
  | LayoutDocument
  | PageDocument
  | SettingsDocument
  | SubMenuDocument;

/**
 * Primary content in *Article → Primary*
 */
export interface ArticleSliceDefaultPrimary {
  /**
   * content field in *Article → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for Article Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticleSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Article → Primary*
 */
export interface ArticleSliceWithoutPaddingPrimary {
  /**
   * content field in *Article → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * WithoutPadding variation for Article Slice
 *
 * - **API ID**: `withoutPadding`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSliceWithoutPadding = prismic.SharedSliceVariation<
  "withoutPadding",
  Simplify<ArticleSliceWithoutPaddingPrimary>,
  never
>;

/**
 * Slice variation for *Article*
 */
type ArticleSliceVariation = ArticleSliceDefault | ArticleSliceWithoutPadding;

/**
 * Article Shared Slice
 *
 * - **API ID**: `article`
 * - **Description**: Article
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSlice = prismic.SharedSlice<
  "article",
  ArticleSliceVariation
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Title field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Body field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Call To Action Label field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.call_to_action_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  call_to_action_label: prismic.KeyTextField;

  /**
   * Call To Action Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.call_to_action_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  call_to_action_link: prismic.LinkField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *Heading → Primary*
 */
export interface HeadingSliceDefaultPrimary {
  /**
   * Heading field in *Heading → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: heading.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;
}

/**
 * Default variation for Heading Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Heading*
 */
type HeadingSliceVariation = HeadingSliceDefault;

/**
 * Heading Shared Slice
 *
 * - **API ID**: `heading`
 * - **Description**: Heading
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingSlice = prismic.SharedSlice<
  "heading",
  HeadingSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Body field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.body
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceDefaultPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *MenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for MenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<MenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *MenuItem → Primary*
 */
export interface MenuItemSliceWithSubMenuPrimary {
  /**
   * Label field in *MenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Sub menu field in *MenuItem → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: menu_item.primary.sub_menu
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  sub_menu: prismic.ContentRelationshipField<"sub_menu">;
}

/**
 * With sub menu variation for MenuItem Slice
 *
 * - **API ID**: `withSubMenu`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSliceWithSubMenu = prismic.SharedSliceVariation<
  "withSubMenu",
  Simplify<MenuItemSliceWithSubMenuPrimary>,
  never
>;

/**
 * Slice variation for *MenuItem*
 */
type MenuItemSliceVariation = MenuItemSliceDefault | MenuItemSliceWithSubMenu;

/**
 * MenuItem Shared Slice
 *
 * - **API ID**: `menu_item`
 * - **Description**: MenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MenuItemSlice = prismic.SharedSlice<
  "menu_item",
  MenuItemSliceVariation
>;

/**
 * Primary content in *Projects → Items*
 */
export interface ProjectsSliceDefaultItem {
  /**
   * Name field in *Projects → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *Projects → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Image field in *Projects → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ProjectsSliceDefaultItem>
>;

/**
 * Slice variation for *Projects*
 */
type ProjectsSliceVariation = ProjectsSliceDefault;

/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: Projects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSlice = prismic.SharedSlice<
  "projects",
  ProjectsSliceVariation
>;

/**
 * Primary content in *Showcase → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
  /**
   * Title field in *Showcase → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Showcase → Items*
 */
export interface ShowcaseSliceDefaultItem {
  /**
   * Title field in *Showcase → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *Showcase → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.items[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Description field in *Showcase → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Background Image field in *Showcase → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.items[].background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Link field in *Showcase → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField<"page">;

  /**
   * Color field in *Showcase → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: showcase.items[].color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ShowcaseSliceDefaultPrimary>,
  Simplify<ShowcaseSliceDefaultItem>
>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault;

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ShowcaseSlice = prismic.SharedSlice<
  "showcase",
  ShowcaseSliceVariation
>;

/**
 * Primary content in *Sponsors → Primary*
 */
export interface SponsorsSliceDefaultPrimary {
  /**
   * Title field in *Sponsors → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Thanks to these fine folks for helping TUDSaT thrive
   * - **API ID Path**: sponsors.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Sponsors → Items*
 */
export interface SponsorsSliceDefaultItem {
  /**
   * Name field in *Sponsors → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sponsors.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * logo field in *Sponsors → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sponsors.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for Sponsors Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SponsorsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SponsorsSliceDefaultPrimary>,
  Simplify<SponsorsSliceDefaultItem>
>;

/**
 * Slice variation for *Sponsors*
 */
type SponsorsSliceVariation = SponsorsSliceDefault;

/**
 * Sponsors Shared Slice
 *
 * - **API ID**: `sponsors`
 * - **Description**: Sponsors
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SponsorsSlice = prismic.SharedSlice<
  "sponsors",
  SponsorsSliceVariation
>;

/**
 * Primary content in *SubMenuItem → Primary*
 */
export interface SubMenuItemSliceDefaultPrimary {
  /**
   * Label field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *SubMenuItem → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sub_menu_item.primary.link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for SubMenuItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubMenuItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SubMenuItem*
 */
type SubMenuItemSliceVariation = SubMenuItemSliceDefault;

/**
 * SubMenuItem Shared Slice
 *
 * - **API ID**: `sub_menu_item`
 * - **Description**: SubMenuItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubMenuItemSlice = prismic.SharedSlice<
  "sub_menu_item",
  SubMenuItemSliceVariation
>;

/**
 * Primary content in *Subsections → Items*
 */
export interface SubsectionsSliceDefaultItem {
  /**
   * Name field in *Subsections → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subsections.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Link field in *Subsections → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: subsections.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Image field in *Subsections → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: subsections.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Subsections Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubsectionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SubsectionsSliceDefaultItem>
>;

/**
 * Slice variation for *Subsections*
 */
type SubsectionsSliceVariation = SubsectionsSliceDefault;

/**
 * Subsections Shared Slice
 *
 * - **API ID**: `subsections`
 * - **Description**: Subsections
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubsectionsSlice = prismic.SharedSlice<
  "subsections",
  SubsectionsSliceVariation
>;

/**
 * Primary content in *TeamMembers → Primary*
 */
export interface TeamMembersSliceDefaultPrimary {
  /**
   * Title field in *TeamMembers → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *TeamMembers → Items*
 */
export interface TeamMembersSliceDefaultItem {
  /**
   * Name field in *TeamMembers → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Position field in *TeamMembers → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.items[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;

  /**
   * Photo field in *TeamMembers → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.items[].photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Default variation for TeamMembers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamMembersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamMembersSliceDefaultPrimary>,
  Simplify<TeamMembersSliceDefaultItem>
>;

/**
 * Slice variation for *TeamMembers*
 */
type TeamMembersSliceVariation = TeamMembersSliceDefault;

/**
 * TeamMembers Shared Slice
 *
 * - **API ID**: `team_members`
 * - **Description**: TeamMembers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamMembersSlice = prismic.SharedSlice<
  "team_members",
  TeamMembersSliceVariation
>;

/**
 * Primary content in *Testemonials → Primary*
 */
export interface TestemonialsSliceDefaultPrimary {
  /**
   * Title field in *Testemonials → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testemonials.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Testemonials → Items*
 */
export interface TestemonialsSliceDefaultItem {
  /**
   * Name field in *Testemonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testemonials.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Position field in *Testemonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testemonials.items[].position
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  position: prismic.KeyTextField;

  /**
   * Quote field in *Testemonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testemonials.items[].quote
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  quote: prismic.KeyTextField;

  /**
   * Image field in *Testemonials → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testemonials.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Testemonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestemonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestemonialsSliceDefaultPrimary>,
  Simplify<TestemonialsSliceDefaultItem>
>;

/**
 * Slice variation for *Testemonials*
 */
type TestemonialsSliceVariation = TestemonialsSliceDefault;

/**
 * Testemonials Shared Slice
 *
 * - **API ID**: `testemonials`
 * - **Description**: Testemonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestemonialsSlice = prismic.SharedSlice<
  "testemonials",
  TestemonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataNavigationItem,
      FooterDocumentDataSocialsItem,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataNavigationItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      LayoutDocument,
      LayoutDocumentData,
      LayoutDocumentDataSlicesSlice,
      LayoutDocumentDataSlices1Slice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SubMenuDocument,
      SubMenuDocumentData,
      SubMenuDocumentDataSlicesSlice,
      AllDocumentTypes,
      ArticleSlice,
      ArticleSliceDefaultPrimary,
      ArticleSliceWithoutPaddingPrimary,
      ArticleSliceVariation,
      ArticleSliceDefault,
      ArticleSliceWithoutPadding,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      HeadingSlice,
      HeadingSliceDefaultPrimary,
      HeadingSliceVariation,
      HeadingSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      MenuItemSlice,
      MenuItemSliceDefaultPrimary,
      MenuItemSliceWithSubMenuPrimary,
      MenuItemSliceVariation,
      MenuItemSliceDefault,
      MenuItemSliceWithSubMenu,
      ProjectsSlice,
      ProjectsSliceDefaultItem,
      ProjectsSliceVariation,
      ProjectsSliceDefault,
      ShowcaseSlice,
      ShowcaseSliceDefaultPrimary,
      ShowcaseSliceDefaultItem,
      ShowcaseSliceVariation,
      ShowcaseSliceDefault,
      SponsorsSlice,
      SponsorsSliceDefaultPrimary,
      SponsorsSliceDefaultItem,
      SponsorsSliceVariation,
      SponsorsSliceDefault,
      SubMenuItemSlice,
      SubMenuItemSliceDefaultPrimary,
      SubMenuItemSliceVariation,
      SubMenuItemSliceDefault,
      SubsectionsSlice,
      SubsectionsSliceDefaultItem,
      SubsectionsSliceVariation,
      SubsectionsSliceDefault,
      TeamMembersSlice,
      TeamMembersSliceDefaultPrimary,
      TeamMembersSliceDefaultItem,
      TeamMembersSliceVariation,
      TeamMembersSliceDefault,
      TestemonialsSlice,
      TestemonialsSliceDefaultPrimary,
      TestemonialsSliceDefaultItem,
      TestemonialsSliceVariation,
      TestemonialsSliceDefault,
    };
  }
}
