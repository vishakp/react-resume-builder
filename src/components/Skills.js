import React, { useState } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
    comma: 188,
    enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];


const Skills = ({ handleChange, values = [] }) => {
    const [state, setState] = useState({
        tags: (values.length > 0)? values.map(value => {
            if(value.id) return value;
            else return {
                id: value,
                text: value
            }
        }): [],
        suggestions: []
    });

    const {
        tags,
        suggestions
    } = state;

    const handleDelete = (i) => {
        setState({
            tags: tags.filter((tag, index) => index !== i),
        });
        setTimeout(() => {
            handleChange({
                target: {
                    name: "skills",
                    value: tags.map(tag => tag.text)
                }
            });
        }, 1000);

    };

    const handleAddition = (tag) => {
        setState({ tags: [...tags, tag] });
        setTimeout(() => {
            handleChange({
                target: {
                    name: "skills",
                    value: tags.map(tag => tag.text)
                }
            });
        }, 1000);
    }

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        // re-render
        this.setState({ tags: newTags });
        setTimeout(() => {
            handleChange({
                target: {
                    name: "skills",
                    value: tags.map(tag => tag.text)
                }
            });
        }, 1000);
    }

    return (
        <div>
            <ReactTags tags={tags}
                placeholder="Press enter to add a new skill"
                inline={false}
                classNames={{
                    tagInputField: "form-control"
                }}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                delimiters={delimiters}
            />
        </div>
    )
}

export default Skills
