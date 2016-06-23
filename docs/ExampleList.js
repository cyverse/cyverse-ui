import React from 'react';
import {
    ButtonEx,
    MediaCardEx,
    AvatarEx,
    TooltipEx,
    TransitionEx,
    TabsEx,
    MeterGaugeEx,
    SelectMenuEx,
    ShowMoreEllipsisEx,
    ToggleEx,
    CircleProgressBarEx,
} from './examples';

const ExampleList = [
    {
        name: "Button",
        desc: "A Button is raised, use it for the more important functions on the page",
        render: ButtonEx,
    },
    {
        name: "MediaCard",
        desc: "MediaCards are used for things like Project and Images that have their own information and actions associated with them. They typically have a short description and a long description that can be seen by expanding the card. A contextual menue is attached to the card that contains all of the actions for that card.",
        render: MediaCardEx,
    },
    {
        name: "Avatar",
        desc: "An Avatar provides variation within a list of cards as to provide some visual distinction between them. The letter makes it easier to quickly scan for a particular title.",
        render: AvatarEx,
    },
    {
        name: "Tooltip",
        desc: "Tooltips are used to offer the user information about a function or graph when hovered. An Icon on a Button with no text should use a Tooltip to let the user know the function of the Button",
        render: TooltipEx,
    },
    {
        name: "Tabs",
        desc: "Tabs are used to change views within a specific scope. Filtering a list is a common use for tabs in Troposphere.", 
        render: TabsEx,
    },
    {
        name: "MeterGauge",
        desc: "ProgressBars are used to show quantities in percentage form. A common use in Troposphere however is to show how much of a total resoource a user has consumed or will consume.",
        render: MeterGaugeEx,
    },
    {
        name: "SelectMenu",
        desc: "A SelectMenu is used for providing the user a set of options they can select for a given task. Troposphere for example, uses SelectMenu to provide the user a way to select the provider they wish to lauch an instance on.",
        render: SelectMenuEx,
    },
    {
        name: "ShowMoreEllipsis",
        desc: "ShowMoreEllipsis is used to show he user that there that there is more content to see that has been hidden by the UI. It has a hover but takes no callbacks or any other props. Generally it is unecessary as it is used on cards or other comonents which expand when the user clicks anywhere inside the card.",
        render: ShowMoreEllipsisEx,
    },
    {
        name: "Toggle",
        desc: "Toggle can be used for `on or off` and `yes or no` user input. By default the label is hidden beccause in most cases we are going to use Toggle in a row or on a card such that it will indicate to the user it's function in a different way. For better accessibility however we still render it to the DOM just moving it's position out of the viewport boundery",
        render: ToggleEx,
    },
    {
        name: "CircleProgressBar",
        desc: "Ya ya",
        render: CircleProgressBarEx,
    }
];

export default ExampleList;
