[View code on GitHub](https://github.com/wandb/weave/weave-js/src/components/Panel2/BokehViewer.tsx)

The `BokehViewer` component in this file is a React component that renders a Bokeh plot. Bokeh is a Python library for creating interactive visualizations in web browsers. The purpose of this component is to allow Bokeh plots to be embedded in a React application.

The component takes in several props, including `headerElements`, `notFoundElements`, `contentNotFound`, and `bokehJson`. `headerElements` is an optional array of JSX elements that will be rendered above the plot. `notFoundElements` is an optional array of JSX elements that will be rendered if the `bokehJson` prop is not provided or if the plot fails to load. `contentNotFound` is a boolean flag that indicates whether the plot failed to load. `bokehJson` is a required prop that contains the JSON representation of the Bokeh plot.

The `BokehViewer` component first checks if the `bokehJson` prop is present. If it is not, the component returns a dash (`-`). If the `bokehJson` prop is present but the Bokeh library has not yet been loaded, the `loadBokehLibrary` function is called to inject the Bokeh library into the page. Once the library has been loaded, the `BokehViewerInner` component is rendered.

The `BokehViewerInner` component is responsible for rendering the actual Bokeh plot. It uses the `useRef` and `useMemo` hooks to create a reference to a `div` element that will contain the plot. The `useEffect` hook is used to update the plot whenever the `bokehJson` prop changes. If the `bokehJson` prop is present, the `Bokeh.embed.embed_item` function is called to embed the plot in the `div` element.

The `BokehViewer` component also renders a `Card` element that contains the plot and any header elements or not-found elements that were passed in as props.

Overall, this component provides a simple way to embed Bokeh plots in a React application. By passing in the JSON representation of a Bokeh plot as a prop, the plot can be rendered and updated dynamically. The `loadBokehLibrary` function ensures that the correct version of the Bokeh library is loaded, which is important for ensuring compatibility between the Python and JavaScript versions of Bokeh.
## Questions: 
 1. What is the purpose of the `loadBokehLibrary` function?
- The `loadBokehLibrary` function injects a bokeh library fetch based on the version of the bokeh content to ensure compatibility with the user's python bokeh version and the JS version.

2. What is the purpose of the `BokehViewer` component?
- The `BokehViewer` component is responsible for loading the bokeh library and rendering the `BokehViewerInner` component once the library is loaded.

3. What are the props that can be passed to the `BokehViewer` and `BokehViewerInner` components?
- The props that can be passed to the `BokehViewer` and `BokehViewerInner` components are `headerElements`, `notFoundElements`, `contentNotFound`, and `bokehJson`.