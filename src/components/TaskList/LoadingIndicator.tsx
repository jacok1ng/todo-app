import { Skeleton } from '@/components/ui/skeleton'

const LoadingIndicator = () => (
  <div className="space-y-3">
    <Skeleton className="h-[100px] w-[650px] rounded" />
    <Skeleton className="h-[100px] w-[650px] rounded" />
    <Skeleton className="h-[100px] w-[650px] rounded" />
  </div>
)

export default LoadingIndicator
