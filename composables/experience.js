import { computed } from 'vue'

export function useExperience (startYear = 2011) {
  const currentYear = new Date().getFullYear()
  const totalYears = computed(() => currentYear - startYear + 1); // +1 pq conta o ano atual também

  function getYearsOfExperience (fromYear) {
    return Math.max(0, currentYear - fromYear + 1)
  }

  return { totalYears, getYearsOfExperience}
}
