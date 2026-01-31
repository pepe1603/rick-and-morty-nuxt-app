import { computed } from 'vue'

export const useRoutePagination = () => {
  const route = useRoute()
  const router = useRouter()

  const page = computed({
    get: () => Number(route.query.page) || 1,
    set: (newPage: number) => {
      router.push({
        query: {
          ...route.query,
          page: newPage
        }
      })
    }
  })

  const name = computed(() => (route.query.name as string) || '')

  const setPage = (newPage: number) => {
    router.push({
      query: {
        ...route.query,
        page: newPage
      }
    })
  }

  const setSearch = (search: string) => {
    const trimmed = search.trim()

    router.push({
      query: {
        page: 1,
        name: trimmed || undefined
      }
    })
  }

  return {
    page,
    name,
    setPage,
    setSearch
  }
}
