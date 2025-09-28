<template>
  <div class="pt-20">
    <SEOHead 
      title="Founders & Team - Rula Bash Imam | Mouhamina Law Office Leadership"
      description="Meet Rula Bash Imam, founder of Mouhamina Law Office, and our expert legal team. Discover the leadership behind Syria's premier legal consultancy with 20+ years of experience in civil society and business law."
      keywords="Rula Bash Imam lawyer, Mouhamina founders, Syria legal team, Damascus law firm partners, legal experts Syria, Louay Shnoudy lawyer, civil society law expertise"
      url="/founders"
    />
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-light text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ $t('founders.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {{ $t('founders.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Founder Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="relative">
            <img 
              :src="images.rulaMain" 
              alt="Rula Bash Imam" 
              class="rounded-2xl shadow-2xl w-full"
            />
            <div class="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div class="text-lg font-bold">{{ $t('founders.badges.founder') }}</div>
              <div class="text-sm">{{ $t('common.since') }} 2005</div>
            </div>
          </div>
          
          <div>
            <h2 class="section-title">{{ $t('founders.rula.name') }}</h2>
            <div class="text-primary text-lg font-semibold mb-6">
              {{ $t('founders.rula.title') }}
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ $t('founders.rula.bio1') }}
            </p>
            
            <p class="text-gray-600 mb-8">
              {{ $t('founders.rula.bio2') }}
            </p>

            <div class="bg-accent-cream p-6 rounded-lg mb-8">
              <h3 class="font-serif text-xl font-semibold text-secondary mb-3">{{ $t('founders.rula.philosophy') }}</h3>
              <p class="text-gray-700 italic">
                "{{ $t('founders.rula.philosophyText') }}"
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="text-gray-600 phone-number">+963 944 247 225</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-gray-600">info@mouhamina.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Louay Shnoudy Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="section-title">{{ $t('founders.team.louay.name') }}</h2>
            <div class="text-primary text-lg font-semibold mb-6">
              {{ $t('founders.team.louay.title') }}
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ $t('founders.team.louay.specialization') }}
            </p>

            <div class="bg-accent-cream p-6 rounded-lg mb-8">
              <h3 class="font-serif text-xl font-semibold text-secondary mb-3">{{ $t('founders.louay.legalReform.title') }}</h3>
              <p class="text-gray-700 italic">
                "{{ $t('founders.louay.legalReform.quote') }}"
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="text-gray-600 phone-number">+963 944 247 225</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-gray-600">louayshnoudi@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              :src="images.louayProfessional" 
              :alt="$t('founders.team.louay.name')" 
              class="rounded-2xl shadow-2xl w-full"
            />
            <div class="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div class="text-lg font-bold">{{ $t('founders.badges.coFounder') }}</div>
              <div class="text-sm">{{ $t('common.since') }} 2009</div>
            </div>
          </div>
        </div>

        <!-- Louay's Achievements Section -->
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-serif font-bold text-secondary mb-4">{{ $t('founders.louay.achievements.title') }}</h3>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
              {{ $t('founders.louay.achievements.description') }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Legal Practice & Reform -->
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="text-xl font-serif font-semibold text-secondary">{{ $t('founders.louay.achievements.legal.title') }}</h4>
              </div>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.achievements.legal.items.item1') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.achievements.legal.items.item2') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.achievements.legal.items.item3') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.achievements.legal.items.item4') }}</span>
                </li>
              </ul>
            </div>

            <!-- Social Impact & Training -->
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-serif font-semibold text-secondary">{{ $t('founders.louay.social.title') }}</h4>
              </div>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.social.items.item1') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.social.items.item2') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.social.items.item3') }}</span>
                </li>
                <li class="flex items-start space-x-2">
                  <span class="text-primary mt-1">•</span>
                  <span>{{ $t('founders.louay.social.items.item4') }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Key Initiatives -->
          <div class="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl">
            <h4 class="text-2xl font-serif font-bold text-secondary mb-6 text-center">{{ $t('founders.louay.initiatives.title') }}</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h5 class="text-lg font-semibold text-primary mb-3">{{ $t('founders.louay.initiatives.kermalak.title') }}</h5>
                <p class="text-gray-600 text-sm">{{ $t('founders.louay.initiatives.kermalak.desc') }}</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h5 class="text-lg font-semibold text-primary mb-3">{{ $t('founders.louay.initiatives.halfSociety.title') }}</h5>
                <p class="text-gray-600 text-sm">{{ $t('founders.louay.initiatives.halfSociety.desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Journey -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('founders.journey.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('founders.journey.description') }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12">
              <!-- 2005 -->
              <div class="flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2005</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.startedPractice') }}</h4>
                    <p class="text-gray-600">
                      {{ $t('founders.timeline.startedPracticeDesc') }}
                    </p>
                  </div>
                </div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 pl-8"></div>
              </div>

              <!-- 2014 -->
              <div class="flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 text-left pl-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2014</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.foundedMouhamina') }}</h4>
                    <p class="text-gray-600">
                      {{ $t('founders.timeline.foundedMouhaminaDesc') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2020s -->
              <div class="flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2020s</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.internationalRecognition') }}</h4>
                    <p class="text-gray-600">
                      {{ $t('founders.timeline.internationalRecognitionDesc') }}
                    </p>
                  </div>
                </div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 pl-8"></div>
              </div>

              <!-- Present -->
              <div class="flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 text-left pl-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2025</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.leadingPractice') }}</h4>
                    <p class="text-gray-600">
                      {{ $t('founders.timeline.leadingPracticeDesc') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('founders.team.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('founders.team.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Main Founder Card -->
          <div class="card-elegant p-8 text-center">
            <img 
              :src="images.rulaMain" 
              alt="Rula Bash Imam" 
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-serif font-semibold text-secondary mb-2">{{ $t('founders.rula.name') }}</h3>
            <p class="text-primary font-medium mb-4">{{ $t('founders.rula.title') }}</p>
            <p class="text-gray-600 text-sm mb-4">{{ $t('founders.rula.experience') }}</p>
            <div class="flex justify-center space-x-3">
              <a href="tel:+963944247225" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </a>
              <a href="mailto:info@mouhamina.com" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Team Member -->
          <div class="card-elegant p-8 text-center">
            <img 
              :src="images.louayJpg" 
              :alt="$t('founders.team.louay.name')" 
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-serif font-semibold text-secondary mb-2">{{ $t('founders.team.louay.name') }}</h3>
            <p class="text-primary font-medium mb-4">{{ $t('founders.team.louay.title') }}</p>
            <div class="flex justify-center space-x-3">
              <a href="tel:+963944247225" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </a>
              <a href="mailto:louayshnoudi@gmail.com" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Team Overview Card -->
          <div class="card-elegant p-8 text-center bg-primary/5">
            <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-2">{{ $t('founders.team.teamOverview.title') }}</h3>
            <p class="text-primary font-medium mb-4">{{ $t('founders.team.teamOverview.subtitle') }}</p>
            <p class="text-gray-600 text-sm">{{ $t('founders.team.teamOverview.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Areas -->
    <section class="py-20 bg-accent-cream">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('founders.expertise.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('founders.expertise.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.civilSociety.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.civilSociety.desc') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.corporate.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.corporate.desc') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.international.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.international.desc') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.training.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.training.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-secondary text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          {{ $t('founders.cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {{ $t('founders.cta.description') }}
        </p>
        <router-link to="/contact" class="btn-primary">
          {{ $t('common.scheduleConsultation') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'
import * as images from '@team-member-imges'

export default {
  name: 'Founders',
  components: {
    SEOHead
  },
  data() {
    return {
      images
    }
  }
}
</script>