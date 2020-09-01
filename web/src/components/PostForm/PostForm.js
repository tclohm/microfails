import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.post?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="imageURL"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>
        <TextField
          name="imageURL"
          defaultValue={props.post?.imageURL}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="imageURL" className="rw-field-error" />

        <Label
          name="effort"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Effort
        </Label>
        <TextField
          name="effort"
          defaultValue={props.post?.effort}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="effort" className="rw-field-error" />

        <Label
          name="result"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Result
        </Label>
        <TextField
          name="result"
          defaultValue={props.post?.result}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="result" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
