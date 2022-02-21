class CommentModel {
    constructor(type) {
        this.type = type;
        this.comments = readFromLS(this.type) || [];
    }

    getComments(q = null) {
        if (q === null) {
            return this.comments;
        } else {
            return this.comments.filter(el => el.name === q);
        }
    }

    addComment(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newComment);
        writeToLS(this.type, this.comments);
    }
}

function writeToLS(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
    return JSON.parse(window.localStorage.getItem(key));
}


const commentUI = `<div class="addComment">
  <h2>Add a comment</h2>
  
  <textarea id="commentEntry" name="comment" rows="5" cols="50"></textarea>
  <div class="submitBtn"><button id="commentSubmit">Comment</button></div>
  </div>
  <h2>Comments</h2>
  <ul class="comments"></ul>`;

function renderCommentList(element, comments) {
    element.innerHTML = '';
    comments.forEach(el => {
        let item = document.createElement('li');
        item.innerHTML = `
              ${el.name}: ${el.comment}
        `;

        element.appendChild(item);
    });
}

class Comments {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new CommentModel(this.type);
    }

    addSubmitListener(postName) {
        document.getElementById('commentSubmit').onclick = () => {
            this.model.addComment(
                postName,
                document.getElementById('commentEntry').value
            );
            document.getElementById('commentEntry').value = '';
            this.showCommentList(postName);
        };
    }
    showCommentList(q = null) {
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            // check to see if the commentUI code has been added yet
            if (parent.innerHTML === '') {
                parent.innerHTML = commentUI;
            }
            if (q !== null) {
                // looking at one post, show comments and new comment button
                document.querySelector('.addComment').style.display = 'block';
                this.addSubmitListener(q);
            } else {
                // no post name provided, hide comment entry
                document.querySelector('.addComment').style.display = 'none';
            }
            // get the comments from the model
            let comments = this.model.getComments(q);
            if (comments === null) {
                // avoid an error if there are no comments yet.
                comments = [];
            }
            renderCommentList(parent.lastChild, comments);
        } catch (error) {
            console.log(error);
        }
    }
}

export default Comments;