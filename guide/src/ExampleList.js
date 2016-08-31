import React from 'react';
import { P } from './components';
import {
    ButtonEx,
    FlatButtonEx,
    MediaCardEx,
    MediaCardGroupEx,
    AvatarEx,
    TooltipEx,
    TransitionEx,
    TabsEx,
    MeterGaugeEx,
    SelectMenuEx,
    ShowMoreEllipsisEx,
    ToggleEx,
    CircleProgressBarEx,
    BadgeEx,
    VerticalMenuEx,
    LoaderEx,
    DialogEx,
    CheckboxEx,
    RadioButtonEx,
    TagEx,
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
        name: "FlatButton",
        desc: (
            <div>
                <P>
                    A FlatButton is not raised so it has a lower visual priority than a raised Button. It should be used for more common function(s) on the page. Typically a FlatButton would be used in a series of equal priorety functions.
                </P>
                <P>
                    Multiple FlatButtons should be displayed in a row. The ButtonGroup utility will add the correct spacing between them.
                </P>
            </div>
                    
        ),
        render: FlatButtonEx,
    },
    {
        name: "Tag",
        desc: (
            <div>
                <P>
                    A Tag is used to show a list of things associated with an owner. For example a list of categories. 
                </P>
                <P>
                    Since a Tag always comes in a list they should be wrapped in a TagGroup component to maintain the proper spaceing between them. 
                </P>
            </div>
                    
        ),
        render: TagEx,
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
                    Tabs should contain functions of equal priority. For example Tabs should not contain several items for changing list veiws and one Tab for something like settings or help.
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
                    ShowMoreEllipsis is used to show he user that there is more content to see that has been hidden by the UI. Generally it is unecessary to trigger any events with it as it is used on cards which expand when the user clicks anywhere inside.
                </P>
            </div>
        ),
        render: ShowMoreEllipsisEx,
    },
    {
        name: "Checkbox",
        desc: (
            <div>
                <P>
                    A Checkbox can be used for "on" or "off" and "yes" or "no" user input. In Troposphere we might use Toggle in the admin section to enable or disable a user account. Another use of Toggle might be to turn options for a project or user account settings "on" or "off". 
                </P>
            </div>
        ),
        render: CheckboxEx,
    },
    {
        name: "RadioButton",
        desc: (
            <div>
                <P>
                    A RadioButton is used for choosing between several options in a list. Since RadioButtons allways appear in a list they must be wrapped in a RadioButtonGroup component to maintain the proper spacing and handle the logic between them.  
                </P>
                <P>
                    In Troposphere a set of RadioButtons are used to let the user choose between a URL or a Text Field when adding a Bootscript to an instance.
                </P>
            </div>
        ),
        render: RadioButtonEx,
    },
    {
        name: "Toggle",
        desc: (
            <div>
                <P>
                    Toggle can be used for "on" or "off" and "yes" or "no" user input. In Troposphere we might use Toggle in the admin section to enable or disable a user account. Another use of Toggle might be to enable options for a project or turn user account settings "on" or "off". 
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
    },
    {
        name: "Badge",
        render: BadgeEx,
        desc: (
            <div>
                <P>
                    A Badge makes a destinction in text on an object, usually a numarical value like number of unread messages. A badge should be located under the title or acrross from a list item. Badges are different from Tags in that they are not user defined and are limmited in number. The more badges that exist within the App the less meaningfull they become as they will begin to create noise.
                </P>
                <P>
                    One use for badges in Troposphere is on Images to help determine the quallity of the Image. A number Badge next to a user Icon shows the active instances of that Image there are, and the Featured badge lets indicates that the Image is Featured.
                </P>
            </div>
        ),
    },
    {
        name: "VerticalMenu",
        render: VerticalMenuEx,
        desc: (
            <div>
                <P>
                    VerticalMenu is a context menu. It is used in the header of a card sheet or page and contains importaint functions for the item it is located on. In Troposphere a VerticalMenu is used on a Project Resource Card and contains functions for the resource that card is dedicated to, like delete, refresh etc...
                </P>
            </div>
        ),
    },
    {
        name: "Loader",
        render: LoaderEx,
        desc: (
            <div>
                <P>
                    A Loader indicates to the user a portion of the UI is loading.
                </P>
            </div>
        ),
    },
    {
        name: "Dialog",
        render: DialogEx,
        desc: (
            <div>
                <P>
                    Dialogs provide the user with a focused way of accomplishing, confirming, or viewing something without entirely leaving a screen or page. 
                </P>
                <P>
                    In Troposphere we use a Dialog to create Instances without losing the context from which the Instance is being created, or to get the user to confirm moving resources without a project into an existing project before continuing on to use the app, without feeling redirected.
                </P>
            </div>
        ),
    },
    {
        name: "MediaCard",
        desc: (
            <P>
                MediaCards are used for objects like Projects, Project Resources, and Images that have their own information and actions associated with them. They typically have a short description and a long description that can be seen by expanding the card. A contextual menu, attached to the card, contains all of the actions for that card.
            </P>
        ),
        render: MediaCardEx,
    },
    {
        name: "MediaCardGroup",
        desc: (
            <P>
                Since only one MediaCard should be open at a time and clicking off the media card should close it a MediaCardGroup is used to control this interdependent behaviour.
            </P>
        ),
        render: MediaCardGroupEx,
    },
];

export default ExampleList;
