<template>
  <div class="pt-20">
    <SEOHead
      title="Legal Services in Syria - Mouhamina Law Office | NGO Registration & Business Licensing"
      titleAr="خدمات محامينا القانونية في سوريا | تسجيل المنظمات وترخيص الأعمال"
      description="Complete legal services in Syria: NGO registration, business licensing, legal representation, contract development, capacity building, and legislative reform. Expert legal consultancy for organizations and businesses."
      descriptionAr="خدمات محامينا القانونية الشاملة في سوريا: تسجيل المنظمات، ترخيص الأعمال، التمثيل القانوني، تطوير العقود، بناء القدرات، والإصلاح التشريعي. استشارات قانونية متخصصة من فريق محامينا للمنظمات والشركات."
      keywords="legal services Syria, NGO registration Syria, business licensing Damascus, legal representation Syria, contract development, capacity building training, legislative reform Syria, civil society registration"
      keywordsAr="خدمات محامينا, الخدمات القانونية سوريا, محامينا سوريا, تسجيل المنظمات سوريا, ترخيص الأعمال دمشق, التمثيل القانوني سوريا, تطوير العقود, تدريب بناء القدرات, الإصلاح التشريعي سوريا, تسجيل المجتمع المدني, مكتب محامينا القانوني"
      url="/services"
    />
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-light text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ $t('services.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {{ $t('services.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-warm-gray">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Service 1 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">01</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.consultancy.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.consultancy.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.consultancy.features.compliance') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.consultancy.features.policies') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">02</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.registration.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.registration.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.registration.features.ngo') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.registration.features.renewals') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">03</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.contracts.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.contracts.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.contracts.features.drafting') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.contracts.features.documents') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">04</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.representation.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.representation.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.representation.features.adr') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 5 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">05</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.administrative.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.administrative.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.administrative.features.civil') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.administrative.features.property') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 6 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">06</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.intellectualProperty.title') }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ $t('services.intellectualProperty.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Service 7 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">07</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.legislation.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.legislation.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.legislation.features.studies') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 8 -->
          <div class="card-elegant p-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-primary font-bold">08</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-serif font-semibold text-secondary mb-3">
                  {{ $t('services.training.title') }}
                </h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">
                  {{ $t('services.training.description') }}
                </p>
                <ul class="text-gray-600 space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.training.features.resources') }}</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ $t('services.training.features.awareness') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Programs -->
    <section class="py-20 bg-accent-cream">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('services.programs.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('services.programs.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.programs.civil.title') }}</h3>
            <div class="text-3xl font-bold text-primary mb-2">112</div>
            <p class="text-gray-600 mb-4">{{ $t('services.programs.civil.participants') }}</p>
            <p class="text-sm text-gray-500">
              {{ $t('services.programs.civil.description') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.programs.legal.title') }}</h3>
            <div class="text-3xl font-bold text-primary mb-2">{{ $t('services.programs.legal.participants') }}</div>
            <p class="text-gray-600 mb-4">مشاركين استفادوا</p>
            <p class="text-sm text-gray-500">
              {{ $t('services.programs.legal.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-secondary text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          {{ $t('services.cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {{ $t('services.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary">
            {{ $t('services.cta.getConsultation') }}
          </router-link>
          <a href="tel:+963944247225" class="btn-secondary">
            {{ $t('services.cta.callNow') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'Services',
  components: {
    SEOHead
  }
}
</script>