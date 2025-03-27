import { useState, useEffect } from "react";

export default function useIsVisible({ refDict }) {
	// refDict: {"pageName": pageRef}
	const [isIntersecting, setIntersecting] = useState({});

	useEffect(() => {
		if (refDict) {
			// Create an IntersectionObserver for each element
			const observers = [];
		
			const observerCallback = (entries, elementName) => {
				entries.forEach((entry) => {
					setIntersecting((prev) => ({
						...prev,
						[elementName]: entry.isIntersecting,
					}));
				});
			};
		
			for (const [elementName, elementRef] of Object.entries(refDict)) {
				if (!elementRef) continue;
		
				const observer = new IntersectionObserver((entries) =>
					observerCallback(entries, elementName)
				);
		
				observer.observe(elementRef);
				observers.push(observer);
			}
		
			// Cleanup all observers when refDict changes or component unmounts
			return () => {
				observers.forEach((observer) => observer.disconnect());
			};
		}
	}, [refDict]);
	
	return isIntersecting;
}
