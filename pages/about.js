import React from 'react';
const thirdVar = `Challenge 3: Two Sum II - Input Array Is Sorted
Create a simple page using React (preferably NextJs) that can cater for following
functionalities;
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number. Let these two numbers be
numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array
[index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same
element twice.
Your solution must use only constant extra space.`
const about = () => {
    return (
        <div>
            This is about assignment of tasks
            <ul>
                <li>
                    Challenge 1: Create a React (preferably NextJs) page with any design that
                    works like a calculator that can add two numbers. <br/>
                    Functionality: When user place numbers on first and second input and hit the button.<br/> The sum
                    should appear on the `Total: ` as an output.
                </li>
                <li>
                    Challenge 2: Create a blank page using React (preferably NextJs) that contains
                    the navbar as below.
                    a. Navbar title can be any name.<br/> You can follow the sample image below<br/>
                    b. Navbar should use 'anchor' tag with href=”/”<br/>
                    c. Please only create a search input without any functions.<br/>
                    d. Mobile view is optional.<br/>
                    i. The navbar should close when user click [ X ]<br/>
                    ii. Replace X icon with Hamburger icon<br/>
                    iii. The navbar should open when user click the icon<br/>
                </li>
                <li>
                    {thirdVar}
                </li>
            </ul>
        </div>
    );
};

export default about;