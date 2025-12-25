# TODO: Add Header Scroll Animation in RestaurantDetails.tsx

## Tasks
- [x] Add constants for header hide threshold and animation duration
- [x] Add Animated.Value for header position (headerTranslateY)
- [x] Add refs for scroll tracking (lastScrollY, scrollAccumulator, scrollTimeout)
- [x] Implement scroll direction-based animation logic in useEffect
- [x] Update Animated.View to use new headerTranslateY
- [x] Remove old position-based translateY interpolation
- [ ] Test the animation on scroll up/down
- [ ] Adjust thresholds or animation if needed
