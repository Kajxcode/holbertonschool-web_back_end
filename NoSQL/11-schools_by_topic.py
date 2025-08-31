#!/usr/bin/env python3
"""the module defines a function"""
from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """returns a list of schools with specific topic"""
    result = mongo_collection.find({"topic": topic})
    return list(result)
