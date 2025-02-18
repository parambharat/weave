import weave
import wandb


# Example of end to end integration test
def test_run_logging(user_by_api_key_in_env):
    run = wandb.init(project="project_exists")
    run.log({"a": 1})
    run.finish()

    summary_node = weave.ops.project(run.entity, run.project).run(run.id).summary()["a"]
    summary = weave.use(summary_node)

    assert summary == 1

    is_none_node = weave.ops.project(run.entity, run.project).isNone()

    assert weave.use(is_none_node) == False

    is_none_node = weave.ops.project(run.entity, "project_does_not_exist").isNone()

    assert weave.use(is_none_node) == True


# Test each of the auth strategies
def test_basic_publish_user_by_api_key_in_context(user_by_api_key_in_context):
    return _test_basic_publish(user_by_api_key_in_context)


def test_basic_publish_user_by_api_key_in_env(user_by_api_key_in_env):
    return _test_basic_publish(user_by_api_key_in_env)


def test_basic_publish_user_by_api_key_netrc(user_by_api_key_netrc):
    return _test_basic_publish(user_by_api_key_netrc)


# As of this writing, I don't have a good way to bootstrap cookies
# def test_basic_publish_user_by_http_headers_in_context(user_by_http_headers_in_context):
#     return _test_basic_publish(user_by_http_headers_in_context)


# def test_basic_publish_user_by_http_headers_in_env(user_by_http_headers_in_env):
#     return _test_basic_publish(user_by_http_headers_in_env)


def _test_basic_publish(user_fixture):
    a = weave.publish([1, 2, 3], "weave/list")
    # Getting the ref for `a` is not a final API. Expect
    # that changes to the publish flow will bread this test
    # and you might need to update how you get the ref.
    ref = a.val._ref
    uri = ref.uri
    assert (
        uri
        == f"wandb-artifact:///{user_fixture.username}/weave/list:0cdf3358dc939f961ca9/obj"
    )
    assert weave.ref_base.Ref.from_str(uri).get() == [1, 2, 3]


# Example of end to end integration test
def test_run_histories(user_by_api_key_in_env):
    run = wandb.init(project="project_exists")
    run.log({"a": 1})
    run.finish()

    run = wandb.init(project="project_exists")
    run.log({"a": 2})
    run.finish()

    history_node = (
        weave.ops.project(run.entity, run.project).runs().history().concat()["a"]
    )
    history = weave.use(history_node)

    # Runs return in reverse chronological order
    assert history == [2, 1]
