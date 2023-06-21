[View code on GitHub](https://github.com/wandb/weave/weave-js/src/components/Panel2/ImageWithOverlays.tsx)

The `weave` code provided is responsible for rendering images with segmentation masks and bounding boxes. It is primarily composed of React functional components and hooks that handle the rendering and manipulation of images, segmentation masks, and bounding boxes.

The main component, `CardImage`, takes an image, masks, bounding boxes, and other control states as props and renders the image with the corresponding masks and bounding boxes. It uses the `useSignedUrlWithExpiration` hook to fetch the signed URL for the image and then renders the image, segmentation masks, and bounding boxes using the `SegmentationMaskFromCG` and `BoundingBoxes` components.

The `SegmentationMaskFromCG` component fetches the segmentation data file URL from CG and renders the segmentation mask using the `SegmentationMaskLoader` component. The `SegmentationCanvas` component is responsible for creating a canvas for visualizing class segmentation. It takes segmentation data, class states, and class overlay states as props and draws the colored segmentation image data on the canvas.

The `BoundingBoxes` component renders the bounding boxes using the `BoundingBoxesCanvas` component. It takes media size, box data, bounding box controls, slider controls, and class set as props. The `BoundingBoxesCanvas` component draws the bounding boxes on a canvas based on the provided controls and class states.

The code also includes utility functions for drawing segmentation masks, clearing the canvas, and drawing bounding boxes with labels.

This code can be used in the larger project to display images with segmentation masks and bounding boxes, allowing users to visualize and interact with the data.
## Questions: 
 1. **Question**: What is the purpose of the `CardImage` component and what are its main functionalities?
   **Answer**: The `CardImage` component is a React functional component that displays an image along with optional masks and bounding boxes. It handles loading the image from a signed URL, rendering the image, and overlaying segmentation masks and bounding boxes if provided.

2. **Question**: How does the `SegmentationMaskFromCG` component work and what are its main responsibilities?
   **Answer**: The `SegmentationMaskFromCG` component is a React functional component that retrieves segmentation data file URL from CG (Connected Graph) and renders a segmentation mask on top of an image. It handles loading the mask file, creating a colored segmentation image data based on class states and overlay states, and rendering the segmentation mask on a canvas.

3. **Question**: How does the `BoundingBoxesCanvas` component handle drawing bounding boxes on the canvas and what are the main customization options available?
   **Answer**: The `BoundingBoxesCanvas` component draws bounding boxes on a canvas by iterating through the provided `boxData` and checking if each box should be hidden based on the `bboxControls` and optional `sliderControls`. It then calculates the box's position and dimensions, sets the line style and color, and draws the box and its label on the canvas. Customization options include line style (solid, dotted, or dashed), hiding labels, and specifying class states for different colors.