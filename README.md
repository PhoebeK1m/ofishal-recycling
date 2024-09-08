# ofishal-recycling (now deprecated)
first ever website :) [https://youtu.be/EIYMyb4ZbUU?si=virwmMXjSBXqQlo-](https://youtu.be/EIYMyb4ZbUU?si=virwmMXjSBXqQlo-)

![Model](https://github.com/fourbeans/ofishal-recycling/blob/4ead3428d344c93c1b2a4252c0606d5fd6614497/images/background.png)
## Inspiration
I lead my high school's environmental club, and one of my duties as a leader is throwing out the recycling bins at the school. Oftentimes, my peers and I would find opened bottles with the drink spilling everywhere and rotting food in styrofoam containers that stain the surrounding recyclable materials and cause everything to become unrecyclable. We also would find less criminal items like unrecyclable plastic wrappers that we would still have to throw out. According to [UNESCO](https://oceanliteracy.unesco.org/plastic-pollution-ocean/), plastic waste constitutes 80% of all marine pollution, and around 8 to 10 million metric tons of plastic end up in the ocean every year. By 2050, plastic will likely outweigh all fish in the sea. It’s scary being aware of these facts, so what can you personally do? Reduce, reuse, and lastly recycle!!! That's why the Ofishal Recycling website was created! To teach people how to properly recycle and create an impact by reducing the amount of plastic that ends up in the ocean.

## What it does 
Ofishal Recycling is an educational space that teaches people how and where to recycle. It uses the gradio API to query an image classification model created by pyesonekyaw on [huggingface](https://huggingface.co/spaces/pyesonekyaw/RecycleTree). The results from this image classification also tell the user how to recycle or dispose of the item as well as notify the user of items that are not commonly recycled but can be dropped off at local recycling centers (e.g. Plastic bags can often be recycled at big chain stores like Walmart). The last page features a short video that goes through all the rules of recycling. Lastly, I have linked a few sites that can help users locate such local recycling centers for uncommon recyclable materials.

## How I built it
I used Netlify to host the website and created the website using html, css, and javascript. In addition, I used gradio’s api to access [pyesonekyaw’s huggingface image classification model](https://huggingface.co/spaces/pyesonekyaw/RecycleTree).

## What's next for Ofishal Recycling
In the future, I would like to create a game that teaches people how to recycle. I will put this on the page once I am finished.
