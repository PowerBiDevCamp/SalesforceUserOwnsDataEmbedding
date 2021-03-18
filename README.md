# Salesforce User-Owns-Data Embedding App

This sample project named
[**SalesforceUserOwnsDataApp**](https://github.com/PowerBiDevCamp/SalesforceUserOwnsDataEmbedding/tree/main/SalesforceUserOwnsDataApp)
consists of a very simple Single Page Application (SPA) that implements
User-Owns-Data embedding with Power BI reports. The solution is built
using three essential files which include
[**index.html**](https://github.com/PowerBiDevCamp/SalesforceUserOwnsDataEmbedding/blob/main/Dist/index.html),
[**app.css**](https://github.com/PowerBiDevCamp/SalesforceUserOwnsDataEmbedding/blob/main/Dist/App/app.css)
and
[**app.js**](https://github.com/PowerBiDevCamp/SalesforceUserOwnsDataEmbedding/blob/main/Dist/App/app.js).
This solution contains an option fourth file named **loading.gif** which
is used to demonstrate a white-label loading technique in which the
developer can display a custom loading image instead of the standard
Power BI branded loading image.

<img src="ReadMe\media\image1.png" style="width:1.37512in;height:1.24528in" />

The **SalesforceUserOwnsDataApp** project uses three different
JavaScript libraries which include [jQuery](https://jquery.com/),
[Microsoft Authentication Library for JavaScript
v2](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-browser)
(**msal-browser.js**) and the [Power BI JavaScript
library](https://docs.microsoft.com/en-us/javascript/api/overview/powerbi/)
(**powerbi.js**).

<img src="ReadMe\media\image2.png" style="width:1.87736in;height:0.93868in" />

Once this SPA application has been deployed and configured, you can
integrated it into a Salesforce environment using iFrame tags. This
techniques makes it possible to embed Power BI report in VisualForce
pages, Lighting Applications and Lighting Aura components.

A central motivation for this project is to provide a User-Owns-Data
embedding experience in the Salesforce environment with more flexibility
than the out-of-the-box Secure Embed feature. In particular, when
embedding a Power BI report using an iFrame generated for the Secure
Embed feature, the user must click the Sign-in button each time they
begin a new browser session. This can make our end users a bit cranky.

<img src="ReadMe\media\image3.png" style="width:1.1934in;height:0.82258in" />

A embedding solution using **SalesforceUserOwnsDataApp** provides the
following advantages over implementing User-Owns-Data embedding using
the Secure Embed feature.

-   When users log in the first time, their credentials are cached in
    the browser using refresh tokens.

-   Once user credentials are cached, embed reports will automatically
    load without requiring interaction.

-   This app uses a white-labelling technique to hide the Power BI logo
    which is exchanged for an animated GIF with a custom loading image.

## Setting Up this Sample

Setting up this application requires the following steps.

-   Create an Azure AD application

-   Download the application files and configure app.js to use your
    application ID

-   Upload the application files to any location where they can be
    accessible through an HTTPS URL.

-   Update the Azure AD application with the URL for the domain where
    you published application files.

-   Test embedding a Power BI report by going directly to the
    application's URL.

-   Embed the report in Salesforce by adding iFrames to VisualForce
    pages and

## Heading 1

Video provides a powerful way to help you prove your point. When you
click Online Video, you can paste in the embed code for the video you
want to add. You can also type a keyword to search online for the video
that best fits your document.

To make your document look professionally produced, Word provides
header, footer, cover page, and text box designs that complement each
other. For example, you can add a matching cover page, header, and
sidebar. Click Insert and then choose the elements you want from the
different galleries.

<img src="ReadMe\media\image4.png" style="width:3.62705in;height:1.25939in" />

Themes and styles also help keep your document coordinated. When you
click Design and choose a new Theme, the pictures, charts, and SmartArt
graphics change to match your new theme. When you apply styles, your
headings change to match the new theme.

Save time in Word with new buttons that show up where you need them. To
change the way a picture fits in your document, click it and a button
for layout options appears next to it. When you work on a table, click
where you want to add a row or a column, and then click the plus sign.

Reading is easier, too, in the new Reading view. You can collapse parts
of the document and focus on the text you want. If you need to stop
reading before you reach the end, Word remembers where you left off -
even on another device.

## Heading 2

Themes and styles also help keep your document coordinated. When you
click Design and choose a new Theme, the pictures, charts, and SmartArt
graphics change to match your new theme. When you apply styles, your
headings change to match the new theme.

Save time in Word with new buttons that show up where you need them. To
change the way a picture fits in your document, click it and a button
for layout options appears next to it. When you work on a table, click
where you want to add a row or a column, and then click the plus sign.

Reading is easier, too, in the new Reading view. You can collapse parts
of the document and focus on the text you want. If you need to stop
reading before you reach the end, Word remembers where you left off -
even on another device.

<img src="ReadMe\media\image5.png" style="width:2.75381in;height:1.489in" />

Here is some text

<img src="ReadMe\media\image6.png" style="width:1.86526in;height:0.84507in" />

Here is more text

<img src="ReadMe\media\image7.png" style="width:2.18779in;height:0.63889in" />

<img src="ReadMe\media\image8.png" style="width:5.10962in;height:1.94286in" />

<img src="ReadMe\media\image9.png" style="width:4.875in;height:2.21605in" />

<img src="ReadMe\media\image10.png" style="width:6.48542in;height:1.44316in" />

<img src="ReadMe\media\image11.png" style="width:4.0676in;height:2.7in" />

<img src="ReadMe\media\image12.png" style="width:4.41189in;height:2.41429in" />
