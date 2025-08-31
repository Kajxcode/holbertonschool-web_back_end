#!/usr/bin/env python3
"""the module defines a function"""
from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    """inserts new document in collection"""
    new_topic = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    return new_topic
