# Website Animations & Hover Effects Guide

## Overview
This document explains all the hover and scroll animations that have been added to your website.

## Animation Classes

### Hover Effects
All these classes can be applied to any element for interactive hover animations:

- **`.hover-lift`** - Elements lift up with shadow when hovered
- **`.hover-glow`** - Elements glow with a colored shadow on hover
- **`.hover-scale`** - Elements scale up 5% when hovered
- **`.hover-rotate`** - Elements rotate -1 degree on hover
- **`.hover-brightness`** - Elements brighten and increase contrast on hover
- **`.hover-border-gold`** - Border transitions from muted to gold on hover

### Scroll Animations
These animations trigger when elements scroll into view:

- **`.scroll-fade-in`** - Fade in from bottom with slide up effect
- **`.scroll-fade-in-left`** - Fade in from left side
- **`.scroll-fade-in-right`** - Fade in from right side
- **`.scroll-scale-in`** - Scale up from small to normal size
- **`.scroll-slide-up`** - Slide up from below with fade

### Stagger Effects
Add delay to staggered animations for elements in lists:

- `.stagger-item-1` through `.stagger-item-6` - Sequential delays (0.1s to 0.6s)

### Other Effects
- **`.gradient-animate`** - Animated gradient background
- **`.bounce-in`** - Bouncy entrance animation
- **`.text-reveal`** - Smooth text reveal animation

## Custom Hooks

### useScrollAnimation
Triggers animations when elements scroll into view.

```tsx
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const { elementRef, isVisible, animationClass } = useScrollAnimation({
  threshold: 0.15,
  rootMargin: '0px',
  animationClass: 'scroll-fade-in'
});

return <div ref={elementRef} className={animationClass}>Content</div>;
```

### useStaggerAnimation
Creates staggered animations for lists of items.

```tsx
import { useStaggerAnimation } from "@/hooks/useScrollAnimation";

const { containerRef, getItemClass, visibleItems } = useStaggerAnimation(6, {
  animationClass: 'scroll-scale-in',
  threshold: 0.2
});

return (
  <div ref={containerRef}>
    {items.map((item, index) => (
      <div key={index} className={getItemClass(index)}>
        {item}
      </div>
    ))}
  </div>
);
```

### useParallax
Creates parallax scrolling effects.

```tsx
import { useParallax } from "@/hooks/useScrollAnimation";

const { elementRef, style } = useParallax(0.5);

return <div ref={elementRef} style={style}>Content</div>;
```

### useMouseTracker
Tracks mouse position for 3D perspective effects.

```tsx
import { useMouseTracker } from "@/hooks/useScrollAnimation";

const { elementRef, style } = useMouseTracker();

return <div ref={elementRef} style={style}>Content</div>;
```

## Implemented Components

### AboutSection
- Left content fades in from left on scroll
- Right images fade in from right on scroll
- Images have hover lift and glow effects with scale-up
- Highlights items lift on hover
- Stats cards scale in with stagger timing

### ProductsSection
- Header fades in on scroll
- Product cards scale in with stagger effect
- Cards lift and glow on hover
- Product tags have hover color transitions
- Modal appears with bounce animation

### ProcessSection
- Header fades in on scroll
- Process step cards fade up with stagger
- Cards lift and glow on hover
- Step numbers scale in sequence

## Timing
- Fade animations: 0.6s ease-out
- Hover transitions: 0.3s ease-out
- Stagger delays: 0.1s - 0.6s intervals
- Scroll animations: triggered on 10-20% visibility

## How to Apply to Other Sections

1. Import the hook:
```tsx
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
```

2. Add the hook in your component:
```tsx
const heading = useScrollAnimation({ 
  animationClass: 'scroll-fade-in',
  threshold: 0.15 
});
```

3. Apply to JSX:
```tsx
<div ref={heading.elementRef} className={heading.animationClass}>
  Your content
</div>
```

4. Add hover effects to interactive elements:
```tsx
<div className="hover-lift hover-glow">Interactive element</div>
```

## Browser Support
All animations use CSS transitions and Intersection Observer API, supported in all modern browsers (Chrome, Firefox, Safari, Edge).

## Performance Tips
- Use stagger animations for better performance on large lists
- Scroll animations use Intersection Observer which is performant
- Hover effects use GPU-accelerated properties (transform, opacity)
- Animations stop observing after triggering (one-time animations)

## Customization
You can customize timing by editing the `@keyframes` in `/src/index.css`:
- Change duration values (e.g., 0.6s to 1s)
- Adjust transform values (e.g., translateY(30px) to translateY(50px))
- Modify stagger delays in the CSS

Enjoy your beautifully animated website!
