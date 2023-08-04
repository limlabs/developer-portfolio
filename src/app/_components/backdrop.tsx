export const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 flex w-screen h-screen z-0 overflow-hidden">
      <div
        style={{
          width: '113vw',
          height: '113vw',
          position: 'absolute',
          top: '33%',
          left: '-56vw',
          flexShrink: 0,
          borderRadius: '113vw`',
          background: `
            radial-gradient(50% 50.00% at 50% 50.00%, rgba(165, 243, 252, 0.12) 0%, rgba(217, 70, 239, 0.00) 100%)
            hsl(var(--background))`,
        }}
      />

      <div
        style={{
          width: '120vw',
          height: '120vw',
          position: 'absolute',
          right: '-80vw',
          top: '-60vw',
          flexShrink: 0,
          borderRadius: '120vw',
          background: `
            radial-gradient(50% 50.00% at 50% 50.00%, rgba(219, 39, 119, 0.08) 0%, rgba(220, 38, 38, 0.00) 100%)
            hsl(var(--background))`,
        }}
      />
    </div>
  )
}
