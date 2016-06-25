import React from 'react';
import { P } from '../src';
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
        desc: (
            <div>
                <P>
                    A Button is raised so it gains a high visual priority. It should be used sparingly for the most important function(s) on the page. Typically a Button would be used for a final confirmation within a form or modal, or if the page contains a list of things a Button might be used to create a new thing.
                </P>
                <P>
                    Multiple Buttons should be displayed in a row. The ButtonGroup utillity will add the correct spacing between them.
                </P>
            </div>
                    
        ),
        render: ButtonEx,
    },
    {
        name: "MediaCard",
        desc: (
            <P>
                MediaCards are used for things like Projects, Project Resources, and Images that have their own information and actions associated with them. They typically have a short description and a long description that can be seen by expanding the card. A contextual menu, attached to the card, contains all of the actions for that card.
                    </P>
        ),
        render: MediaCardEx,
    },
    {
        name: "Avatar",
        desc: (
            <P>
                An Avatar adds some visual distinction between items in a list. The letter makes it easier for a user to quickly scan for a particular title. 
            </P>
        ),
        render: AvatarEx,
    },
    {
        name: "Tooltip",
        desc: (
            <P>
                Tooltips are used to offer the user information about a function or graph when hovered. An Icon on a Button with no text should use a Tooltip to let the user know the function of the Button.
            </P>
        ),
        render: TooltipEx,
    },
    {
        name: "Tabs",
        desc: (
            <div>
                <P>
                    Tabs are used to change views within a specific scope. Filtering a list is a common use for tabs in Troposphere.
                </P>
                <P>
                    Tabs should contain funtions of equal priority. For example Tabs should not contain several items for changing list veiws and one Tab for something like settings or help.
                </P>
            </div>
        ), 
        render: TabsEx,
    },
    {
        name: "MeterGauge",
        desc: (
            <P>
                A MeterGauge is used to depict a percentage of a known quantity. A common use in Troposphere is to show how much of a total resource a user HAS consumed or WILL consume. In the case that a MeterGauge is showing how much of a known quantity a user WILL consume, in a form for example, an after value can be passed in addition to the start value. 
            </P>
        ),
        render: MeterGaugeEx,
    },
    {
        name: "SelectMenu",
        desc: (
            <div>                 
                <P>
                    SelectMenu is used for providing the user a set of options they can choose from in a form or Modal. Troposphere for example, uses SelectMenu to provide the user a way to select the provider they wish to launch an instance on.
                </P>
                <P>
                    A SelectMenu is not to be used for a list of functions. Instead use a DropDownMenu or a VerticalMenu
                </P>
            </div>
        ),
        render: SelectMenuEx,
    },
    {
        name: "ShowMoreEllipsis",
        desc: (
            <div>
                <P>
                    ShowMoreEllipsis is used to show he user that there is more content to see that has been hidden by the UI. It has a hover but takes no callbacks or any other props. Generally it is unecessary to trigger any events with it as it is used on cards which expand when the user clicks anywhere inside.
                </P>
                <P>
                    If an event must be triggered, the component can be wrapped in a div with an event handler and a display of inline-block.
                </P>
            </div>
        ),
        render: ShowMoreEllipsisEx,
    },
    {
        name: "Toggle",
        desc: (
            <div>
                <P>
                    Toggle can be used for "on" or "off" and "yes" or "no" user input. In Troposphere we might use Toggle in the admin section to enable or disable a user account. Another use of Toggle might be to turn options for a project or user account settings "on" or "off". 
                </P>
                <P>
                    By default the label is hidden beccause in most cases we are going to use Toggle in a row or on a card such that it will indicate to the user it's function in a different way. For better accessibility however we still render the label to the DOM just moving it's position out of the viewport boundery
                </P>
            </div>
        ),
        render: ToggleEx,
    },
    {
        name: "CircleProgressBar",
        desc: (
            <P>
                CircleProgressBar is used to inform the user that a proccess is taking place as well as what percentage of that proccess is finished.  
            </P>
        ),
        render: CircleProgressBarEx,
    }
];

export default ExampleList;
