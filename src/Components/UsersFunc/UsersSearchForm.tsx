import { Formik, Form, Field } from "formik";
import { useAppDispatch } from "src/Redux/HooksTypes";
import { FilterType, getUserPagination } from "src/Redux/UsersFuncReducer";
// import { getFilterTerm } from "src/Redux/UsersFuncReducer";

type UsersSearchFormPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged?: any;
  portionSize?: number;
};

const UsersSearchForm: React.FC<UsersSearchFormPropsType> = (props) => {
  const onFilterChanged = (filter: FilterType) => {
    let currentPage = props.currentPage
    let pageSizee = props.pageSize
    dispatch(getUserPagination(currentPage, pageSizee, filter.term));
  };
  let dispatch = useAppDispatch();
  const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
  };
  const submit = (
    values: FilterType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onFilterChanged(values);
    setSubmitting(false)
  };

  return (
    <div>
      <Formik
        initialValues={{ term: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UsersSearchForm;
