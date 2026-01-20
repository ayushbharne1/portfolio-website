import React from 'react'

const PageSkeleton = () => {
  return (
    <div className="min-h-screen p-6 bg-neutral-850 animate-pulse">
      {/* Title */}
      <div className="h-8 w-56 bg-neutral-800 rounded mb-8" />

      {/* Text lines */}
      <div className="space-y-4">
        <div className="h-4 bg-neutral-800 rounded w-full" />
        <div className="h-4 bg-neutral-800 rounded w-11/12" />
        <div className="h-4 bg-neutral-800 rounded w-8/12" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-xl bg-neutral-800"
          />
        ))}
      </div>
    </div>
  )
}

export default PageSkeleton
