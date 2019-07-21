---
projectType: 'case study'
date: "2018-03"
date2: "2018-10"
title: "VTEX Home"
minibio: "A new home dashboard for an ecommerce platfom."
description: "A new home for the an e-commerce platform admin, setting the ground for a new generation of Admin UIs."
tags: ['design']
cover: './cover.png' 
team: 'Bruna Aleixo, Raimundo Carlos Laguía, Guilherme Rodrigues, Kevin Chevalier'
forceOrder: 3
---
  

# Context
VTEX is a global SaaS technology company focused on ecommerce solutions that have a daily impact on the work of thousands of people around the world. More than 2500 leading brands of varying sizes and segments, with operations in 26 countries and in global expansion, rely on VTEX for the online sales of their products.

The main challenge of working in such environment is that the product is the same whether you're a small store or a huge commerce operation. So every solution we design has to leverage a huge diversity of user needs, and build something that works for everybody.
 
The main touchpoint of our product with the merchants is the Admin. It's where our clients configure and manage everything related to their commerce operations. It's also where most of our design efforts go into.

 
## The problem 
With the coming of age of [VTEX IO](https://vtex.io/), our serverless service for hosting e-commerce applications, we were ready to start using it to host our own Admin. 

This was much more than just [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food). We knew the "new platform" was more modern, robust and easier to use than anything we ever had before. A new navigation shell and routing system for the new admin was ready for use, now we needed to start replacing the iframes of the old admins with fresh, first-citizen reimplementations of them.

This project was the first section of the Admin that was rewritten using all the newest technologies we had, and was a great way of showcasing the our users that a new generation of technologies and admin panels was coming.
 

# Process 

With so much important stuff to build in the platform designing a new Home was definitely not one of the priorities. This project was made possible in an internal Hackathon, where we gathered forces and joined developers from different teams to work together and create a proof of concept in 48 hours.

Our main objective was to create the first new VTEX admin screen, but we didn't know which one. Given we had limited time and human resources we though that old ugly Home was a perfect fit for the challenge.

```grid|1 
![](./oldadmin.png "The old admin home screen. A little dull and messy.") 
```

As with many projects in VTEX benchmarking was a big challenge. How many big e-commerce SaaS platforms do we know? Not even a handful. How many of them have really great design and targeted a very similar audience compared to us? You got the point. This pushed us to think outside the box and try to get inspiration from different places.

Because of the mentioned project constraints we leveraged the internal knowledge that our Product and Customer Care teams had about the platform and what we could offer. 


## The concept

VTEX is a tool people use to do their work every day, and they spend a lot of time in it, so it has to offer great services and at the same time be welcoming and comfortable to hang out. What other services work like that? I thought it was similar to a Hotel, which offers "comfort-as-a-service", as well as fulfill people's basic needs such as food, entertainment, etc. Just like a Hotel we're also big and very complex inside, but it has to be invisible to the final user.

Now looking at the company's culture and values:

* Exclusivity is not one of our strengths, we have a multinenant SaaS platform. We prioritize offering single solution to all of our clients instead of exclusive solutions tailored for each client. It's like if people had to eat sharing the table. Hum.
* From an hierarchical standpoint we strive to be horizontal, both internally and externally. Our clients are super diverse, but our solutions have to work well for everyone.
* And internally we have no managers or bosses: hierarchy is organic, and most of the time decisions are taken horizontally, which demands lots of communication and empathy.
* Our main value is not our features, but the ecosystem, the community, and lots of other stuff.
* We're definitely not classic or traditional, just look at our main brand color: pink (most of other platforms and IT companies are blue).


## Designing with values

**The hypothesis: the home of VTEX Admin should feel like the lobby of a Hostel.**

A lobby is where the mood is set. It's in the beginning of the journey of using the product, probably the first thing someone sees when starting their working hours. So it should feel welcoming. Sometimes it's calming, sometimes it isn't, but it's always pleasant.

I started building a Moodboard of pictures of the coolest Hostel lobbies I could find, looking for patterns.

```grid|1
![](./moodboard.jpg) 
```  

From these observations we ended up with these 7 core values:

* **Communal** and **transparent**: shared spaces and visual permeability encourage people to make eye contact;
* **Beautiful**: decoration might be tend to the noisy side of the spectrum, but it's always harmonious, with welcoming warm colors and textures;
* **Informal** and playful furniture invite people to relax and leisure activities;
* **Objective**: it simplifies the inner complexities and guides people (wayfinding).
* **Diverse**: Everything, from decoration to architecture celebrates the diversity of customers. People feel part of it and are often encouraged to leave their marks, customizing the space.
* **Welcoming**: there's always a help desk with someone ready to answer your questions.

<!-- ```grid|1
![](./values.jpg) 
```  -->


# The components

Materializing the values into actual UI was done in both a top-down and bottom-up approaches:

* Top-down: we used the values as a "healthcheck", to filter ideas that would come from the ideation session with the team and other all stakeholders we could bring together.
* Bottom-up: the values themselves helped us imagine new features that we didn't think of before.
  
```grid|1
![](./components.jpg)
```

## Iterations

Each component passed through several iterations, playing with variations on visual weight and content writing and collecting feedback from the team.

```grid|2
![](./process3.png) 
![](./process5.png) 
```

```grid|2
![](./process4.png)  
![](./process1.png) 
```

```grid|1
![](./process2.png) 
```


# Result
 
Here's how everything worked together. This is the actual state of the page development.

<jumbo>
    <img src="./breakdown.png"/>
</jumbo>

```grid|1
![](./vtex.com.png "The landing page for VTEX, highlighting our work.")
```

```grid|1
![](./photo.jpg "A member of the Support Team with the Admin open, a common scene in our office (not sure why, honestly).")
```

<!-- ## Before

```grid|1
![](./before.png)
```

## After
 
```grid|1
![](./after.png)
```   -->


<!-- ## Further work

* Usar uma analogia melhor (usar analogia de uma loja de verdade?)
* Pesquisa: entrevistar usuários da VTEX, o que eles esperam da Home.
* Desenvolver novos cards -->