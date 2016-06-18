import React from 'react';
import {
    ButtonEx,
    MediaCardEx,
    AvitarEx,
    TooltipEx,
    TransitionEx,
    TabsEx,
    MeterGaugeEx,
    SelectMenuEx,
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
        name: "Avitar",
        desc: "An Avitar provides variation within a list of cards as to provide some visual distinction between them. The letter makes it easier to quickly scan for a particular title.",
        render: AvitarEx,
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
];

export default ExampleList;
