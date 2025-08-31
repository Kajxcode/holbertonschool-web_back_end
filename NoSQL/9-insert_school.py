#!/usr/bin/env python3
"""the module defines a function"""
from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """inserts new document in collection"""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
