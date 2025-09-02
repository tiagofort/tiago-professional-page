import { computed } from 'vue'

export function useExperience (startYear = 2011) {
  const currentYear = new Date().getFullYear()
  const totalYears = computed(() => currentYear - startYear)

  function getYearsOfExperience (fromYear) {
    return Math.max(0, currentYear - fromYear)
  }

  return { totalYears, getYearsOfExperience}
}
