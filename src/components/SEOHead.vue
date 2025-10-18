<template>
  <div></div>
</template>

<script>
export default {
  name: 'SEOHead',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleAr: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    descriptionAr: {
      type: String,
      default: ''
    },
    keywords: {
      type: String,
      default: ''
    },
    keywordsAr: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '/logo.jpg'
    },
    url: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'website'
    }
  },
  computed: {
    currentTitle() {
      const isArabic = this.$i18n?.locale === 'ar'
      if (isArabic && this.titleAr) return this.titleAr
      if (!isArabic && this.title) return this.title
      // Default fallbacks
      return isArabic
        ? 'مكتب محامينا القانوني - الاستشارات القانونية الرائدة في سوريا'
        : 'Mouhamina Law Office - Leading Legal Consultancy in Syria'
    },
    currentDescription() {
      const isArabic = this.$i18n?.locale === 'ar'
      if (isArabic && this.descriptionAr) return this.descriptionAr
      if (!isArabic && this.description) return this.description
      // Default fallbacks
      return isArabic
        ? 'مكتب محامينا القانوني يقدم خدمات استشارية قانونية متخصصة، تسجيل، ترخيص، وتمثيل قانوني في سوريا. أسسته رولا باش إمام مع خبرة 18+ سنة في خدمة 117+ منظمة.'
        : 'Mouhamina Law Office provides expert legal consultancy, registration, licensing, and representation services in Syria. Founded by Rula Bash Imam with 18+ years of experience serving 117+ organizations.'
    },
    currentKeywords() {
      const isArabic = this.$i18n?.locale === 'ar'
      if (isArabic && this.keywordsAr) return this.keywordsAr
      if (!isArabic && this.keywords) return this.keywords
      // Default fallbacks
      return isArabic
        ? 'محامي سوريا, استشارات قانونية سوريا, مكتب محاماة دمشق, تسجيل المجتمع المدني, ترخيص المنظمات سوريا, التمثيل القانوني دمشق, قانون الأعمال سوريا, خدمات قانونية دولية, محامينا'
        : 'Syria lawyer, legal consultancy Syria, Damascus law firm, civil society registration, NGO licensing Syria, legal representation Damascus, business law Syria, international legal services'
    }
  },
  mounted() {
    this.updateHead()
  },
  watch: {
    title: 'updateHead',
    description: 'updateHead',
    keywords: 'updateHead',
    // Recompute when language changes
    '$i18n.locale': 'updateHead'
  },
  methods: {
    updateHead() {
      // Update title with current language
      document.title = this.currentTitle

      // Update HTML lang and dir attributes
      const currentLocale = this.$i18n?.locale || 'en'
      document.documentElement.lang = currentLocale
      document.documentElement.dir = currentLocale === 'ar' ? 'rtl' : 'ltr'

      // Update or create meta tags with current language content
      this.updateMetaTag('description', this.currentDescription)
      this.updateMetaTag('keywords', this.currentKeywords)
      this.updateMetaTag('author', currentLocale === 'ar'
        ? 'رولا باش إمام - مكتب محامينا القانوني'
        : 'Rula Bash Imam - Mouhamina Law Office')
      this.updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
      this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')
      this.updateMetaTag('content-language', currentLocale)

      // Language and locale
      const ogLocale = currentLocale === 'ar' ? 'ar_SY' : 'en_US'
      const alternateLocale = currentLocale === 'ar' ? 'en_US' : 'ar_SY'
      const languageName = currentLocale === 'ar' ? 'Arabic' : 'English'
      this.updateMetaTag('language', languageName)
      this.updateMetaTag('geo.region', 'SY-DI') // Damascus, Syria
      this.updateMetaTag('geo.placename', 'Damascus')
      this.updateMetaTag('geo.position', '33.5138;36.2765')
      this.updateMetaTag('ICBM', '33.5138, 36.2765')

      // Open Graph tags with current language
      this.updateMetaProperty('og:title', this.currentTitle)
      this.updateMetaProperty('og:description', this.currentDescription)
      this.updateMetaProperty('og:type', this.type)
      this.updateMetaProperty('og:image', window.location.origin + this.image)
      this.updateMetaProperty('og:url', window.location.origin + this.url)
      this.updateMetaProperty('og:site_name', currentLocale === 'ar'
        ? 'مكتب محامينا القانوني'
        : 'Mouhamina Law Office')
      this.updateMetaProperty('og:locale', ogLocale)
      this.updateMetaProperty('og:locale:alternate', alternateLocale)

      // Twitter Card tags with current language
      this.updateMetaProperty('twitter:card', 'summary_large_image')
      this.updateMetaProperty('twitter:title', this.currentTitle)
      this.updateMetaProperty('twitter:description', this.currentDescription)
      this.updateMetaProperty('twitter:image', window.location.origin + this.image)

      // Additional SEO tags
      this.updateMetaTag('theme-color', '#C9A96E')
      this.updateMetaTag('msapplication-TileColor', '#C9A96E')
      
      // Canonical URL
      this.updateCanonical(window.location.origin + this.url)

      // Add hreflang tags for language alternatives
      this.updateHreflangTags()

      // Add structured data
      this.addStructuredData()
    },

    updateMetaTag(name, content) {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    },

    updateMetaProperty(property, content) {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    },

    updateCanonical(href) {
      let element = document.querySelector('link[rel="canonical"]')
      if (element) {
        element.setAttribute('href', href)
      } else {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        element.setAttribute('href', href)
        document.head.appendChild(element)
      }
    },

    updateHreflangTags() {
      // Remove existing hreflang tags
      const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]')
      existingHreflang.forEach(el => el.remove())

      const baseUrl = window.location.origin + this.url

      // Add hreflang for English
      const enLink = document.createElement('link')
      enLink.setAttribute('rel', 'alternate')
      enLink.setAttribute('hreflang', 'en')
      enLink.setAttribute('href', baseUrl)
      document.head.appendChild(enLink)

      // Add hreflang for Arabic
      const arLink = document.createElement('link')
      arLink.setAttribute('rel', 'alternate')
      arLink.setAttribute('hreflang', 'ar')
      arLink.setAttribute('href', baseUrl)
      document.head.appendChild(arLink)

      // Add x-default for international users
      const xDefaultLink = document.createElement('link')
      xDefaultLink.setAttribute('rel', 'alternate')
      xDefaultLink.setAttribute('hreflang', 'x-default')
      xDefaultLink.setAttribute('href', baseUrl)
      document.head.appendChild(xDefaultLink)
    },

    addStructuredData() {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Create new structured data
      const currentLocale = this.$i18n?.locale || 'en'
      const schemaLanguage = currentLocale === 'ar' ? 'ar' : 'en-US'
      const isArabic = currentLocale === 'ar'

      const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LegalService",
            "@id": `${window.location.origin}#legalservice`,
            "name": isArabic ? "مكتب محامينا القانوني" : "Mouhamina Law Office",
            "alternateName": isArabic ? "Mouhamina Law Office" : "محامينا",
            "description": this.currentDescription,
            "url": window.location.origin,
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/logo.jpg`
            },
            "image": `${window.location.origin}/logo.jpg`,
            "telephone": "+963944247225",
            "email": "info@mouhamina.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": isArabic ? "الصالحية، شارع العابد" : "Al-Salihiyah, Al-Abed Street",
              "addressLocality": isArabic ? "دمشق" : "Damascus",
              "addressCountry": isArabic ? "سوريا" : "Syria"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.518459",
              "longitude": "36.923899"
            },
            "founder": {
              "@type": "Person",
              "name": isArabic ? "رولا باش إمام" : "Rula Bash Imam",
              "jobTitle": isArabic ? "المؤسسة والشريكة المديرة" : "Founder & Managing Partner",
              "telephone": "+963944247225",
              "email": "info@mouhamina.com"
            },
            "employee": [
              {
                "@type": "Person",
                "name": isArabic ? "رولا باش إمام" : "Rula Bash Imam",
                "jobTitle": isArabic ? "المؤسسة والشريكة المديرة" : "Founder & Managing Partner"
              },
              {
                "@type": "Person",
                "name": isArabic ? "لؤي شنودي" : "Louay Shnoudy",
                "jobTitle": isArabic ? "مستشار قانوني أول" : "Senior Legal Counsel"
              }
            ],
            "areaServed": {
              "@type": "Country",
              "name": isArabic ? "سوريا" : "Syria"
            },
            "serviceType": isArabic ? [
              "الاستشارات القانونية",
              "تسجيل الشركات",
              "التمثيل القانوني",
              "صياغة العقود",
              "الإصلاح التشريعي",
              "التدريب القانوني"
            ] : [
              "Legal Consultancy",
              "Business Registration",
              "Legal Representation",
              "Contract Development",
              "Legislative Reform",
              "Legal Training"
            ],
            "knowsAbout": isArabic ? [
              "قانون المجتمع المدني",
              "قانون الشركات",
              "القانون الدولي",
              "الامتثال القانوني",
              "تسجيل المنظمات غير الحكومية",
              "ترخيص الأعمال"
            ] : [
              "Civil Society Law",
              "Corporate Law",
              "International Law",
              "Legal Compliance",
              "NGO Registration",
              "Business Licensing"
            ],
            "yearsFounded": "2014",
            "foundingDate": "2014",
            "sameAs": []
          },
          {
            "@type": "WebSite",
            "@id": `${window.location.origin}#website`,
            "url": window.location.origin,
            "name": isArabic ? "مكتب محامينا القانوني" : "Mouhamina Law Office",
            "description": this.currentDescription,
            "publisher": {
              "@id": `${window.location.origin}#legalservice`
            },
            "inLanguage": schemaLanguage
          },
          {
            "@type": "Organization",
            "@id": `${window.location.origin}#organization`,
            "name": isArabic ? "مكتب محامينا القانوني" : "Mouhamina Law Office",
            "alternateName": isArabic ? "Mouhamina Law Office" : "محامينا",
            "url": window.location.origin,
            "logo": `${window.location.origin}/logo.jpg`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+963944247225",
              "contactType": isArabic ? "الخدمات القانونية" : "Legal Services",
              "email": "info@mouhamina.com",
              "availableLanguage": isArabic ? ["العربية", "الإنجليزية"] : ["English", "Arabic"]
            }
          }
        ]
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }
}
</script>